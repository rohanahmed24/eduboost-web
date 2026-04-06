# Downloads Figma MCP asset URLs referenced in app/_components into public/images/eduboost.
# Then run: node scripts/generate-eb-asset.mjs

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot/..

$base = "https://www.figma.com/api/mcp/asset"
$dir = "public/images/eduboost"
New-Item -ItemType Directory -Force -Path $dir | Out-Null

$ids = Select-String -Path "app\_components\*.tsx" -Pattern 'ebAsset\("([a-f0-9-]+)"\)' -AllMatches |
  ForEach-Object { $_.Matches } |
  ForEach-Object { $_.Groups[1].Value } |
  Sort-Object -Unique

foreach ($id in $ids) {
  $url = "$base/$id"
  $tmp = Join-Path $dir "$id.tmp"
  $png = Join-Path $dir "$id.png"
  if (Test-Path $png) { continue }
  $existing = Get-ChildItem -Path $dir -Filter "$id.*" -File
  if ($existing) { continue }

  Invoke-WebRequest -Uri $url -OutFile $tmp -UseBasicParsing -TimeoutSec 180
  $b = [System.IO.File]::ReadAllBytes($tmp)
  if ($b.Length -lt 4) { throw "empty $id" }

  $ext = ".png"
  if ($b[0] -eq 0xFF -and $b[1] -eq 0xD8 -and $b[2] -eq 0xFF) { $ext = ".jpg" }
  elseif ($b[0] -eq 0x3C -and ($b[1] -eq 0x3F -or $b[1] -eq 0x73)) { $ext = ".svg" }

  Move-Item -Force $tmp (Join-Path $dir "$id$ext")
  Write-Host "ok $id$ext"
  Start-Sleep -Milliseconds 80
}

node scripts/generate-eb-asset.mjs
Write-Host "Done. Regenerated app/_lib/eb-asset.ts"
