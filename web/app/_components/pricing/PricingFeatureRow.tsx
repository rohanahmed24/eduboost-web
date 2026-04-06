import { pricingUnionIcon } from "./assets";

type PricingFeatureRowProps = {
  text: string;
  "data-node-id"?: string;
};

export function PricingFeatureRow({ text, "data-node-id": dataNodeId }: PricingFeatureRowProps) {
  return (
    <div
      className="content-stretch flex w-full shrink-0 items-center gap-[4px] relative"
      data-node-id={dataNodeId}
    >
      <div className="relative shrink-0 size-[20px]" data-name="Union">
        <img
          alt=""
          className="absolute block max-w-none size-full"
          src={pricingUnionIcon}
        />
      </div>
      <div className="relative flex min-w-0 flex-1 flex-col justify-end font-['PP_Neue_Montreal:Medium',sans-serif] leading-[0] not-italic text-[#262626] text-[16px]">
        <p className="leading-[24px]">{text}</p>
      </div>
    </div>
  );
}
