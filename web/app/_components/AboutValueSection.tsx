import { ebAsset } from "@/app/_lib/eb-asset";
import { AnimatedStatValue } from "./motion/AnimatedStatValue";
import { Reveal, RevealStagger, RevealStaggerItem } from "./motion/Reveal";
import { ScrollPaintHeadline } from "./motion/ScrollPaintHeadline";
import { scrollPaintLightUniform } from "./motion/scrollPaintTokens";
import { PageContainer } from "./PageContainer";

const imgUnion = ebAsset("f269b23c-45e2-44c2-b17b-6cb43544cf13");
const imgAdd01 = ebAsset("2d331c86-7015-4c70-87ad-d46b619c5cbf");

type StatCardProps = {
  value: string;
  body: string;
  nodeIds: [string, string, string, string, string, string];
};

function StatCard({ value, body, nodeIds }: StatCardProps) {
  return (
    <div
      className="flex h-[320px] flex-col rounded-2xl bg-white p-6"
      data-node-id={nodeIds[0]}
    >
      {/* Top section with number and top plus icon */}
      <div className="flex items-start justify-between" data-node-id={nodeIds[1]}>
        <AnimatedStatValue
          className="font-['PP_Neue_Montreal',sans-serif] font-medium text-[clamp(2.5rem,4vw+1.5rem,4.5rem)] leading-none tracking-[-0.05em] text-black"
          data-node-id={nodeIds[3]}
          durationSec={1.6}
          value={value}
        />
        <div className="relative size-8" data-node-id={nodeIds[5]}>
          <img
            alt=""
            className="absolute block size-full max-w-none"
            src={imgAdd01}
          />
        </div>
      </div>

      {/* Bottom section with description and bottom plus icon */}
      <div className="mt-auto flex items-end justify-between gap-4" data-node-id={nodeIds[2]}>
        <p
          className="flex-1 font-['PP_Neue_Montreal',sans-serif] font-normal text-[16px] leading-6 tracking-[-0.16px] text-[#bfbfbf]"
          data-node-id={nodeIds[4]}
        >
          {body}
        </p>
        <div className="relative size-8 shrink-0">
          <img
            alt=""
            className="absolute block size-full max-w-none"
            src={imgAdd01}
          />
        </div>
      </div>
    </div>
  );
}

export function AboutValueSection() {
  return (
    <section data-node-id="65:80373">
      <PageContainer className="flex flex-col gap-[clamp(2rem,5vw,3.75rem)] py-8 lg:py-[clamp(3rem,10vw,10rem)]">
        {/* ── Mobile-only pill + headline ── */}
        <Reveal
          className="lg:hidden flex flex-col gap-4"
          duration={0.74}
          y={16}
        >
          <div className="inline-flex w-fit items-center gap-1 rounded-full bg-[#fff7f5] px-3 py-[7px]">
            <div className="relative shrink-0 size-5" data-name="Union">
              <img
                alt=""
                className="absolute block size-full max-w-none"
                src={imgUnion}
              />
            </div>
            <p className="font-['PP_Neue_Montreal',sans-serif] font-normal text-[14px] leading-5 tracking-[-0.56px] text-black whitespace-nowrap">
              About us
            </p>
          </div>
          <div className="font-['PP_Neue_Montreal',sans-serif] font-medium text-[0px] not-italic text-black tracking-[-0.32px]">
            <ScrollPaintHeadline
              theme="light"
              className="text-[2rem] leading-[1.25] tracking-[-0.32px]"
              segments={[
                { variant: "primary", text: "Eduboost is an innovative e-learning platform built to empower learners with practical, career-focused skills. We connect " },
                { variant: "muted", text: "students with expert instructors, interactive courses, and flexible learning paths" },
              ]}
            />
          </div>
        </Reveal>

        {/* ── Pill label + headline ── */}
        <Reveal
          className="max-lg:hidden flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between"
          duration={0.74}
          y={16}
          data-node-id="65:80374"
        >
          <div
            className="inline-flex w-fit shrink-0 items-center gap-1 rounded-full bg-[#fff7f5] px-3 py-[7px]"
            data-node-id="65:80375"
          >
            <div
              className="relative shrink-0 size-5"
              data-name="Union"
              data-node-id="65:80376"
            >
              <img
                alt=""
                className="absolute block size-full max-w-none"
                src={imgUnion}
              />
            </div>
            <p
              className="font-['PP_Neue_Montreal',sans-serif] font-medium text-[15px] leading-6 tracking-[-0.01em] text-black whitespace-nowrap sm:text-[18px] sm:leading-[24px] sm:tracking-[-0.18px]"
              data-node-id="65:80378"
            >
              Our Value
            </p>
          </div>

          <div
            className="flex min-w-0 flex-1 flex-col lg:max-w-[893px]"
            data-node-id="65:80379"
          >
            <div
              className="font-['PP_Neue_Montreal',sans-serif] font-medium text-[0px] not-italic text-black tracking-[-0.4px]"
              data-node-id="65:80380"
            >
              <ScrollPaintHeadline
                theme="light"
                uniform={scrollPaintLightUniform}
                className="text-[clamp(1.5rem,2.2vw+1rem,2.5rem)] leading-[1] tracking-[-0.01em]"
                segments={[
                  {
                    variant: "primary",
                    text: "We value quality education, learner success practical skills, integrity, innovation, inclusivity, and continuous improvement to help people grow confidently and build meaningful careers",
                  },
                ]}
              />
            </div>
          </div>
        </Reveal>

        {/* ── Stat cards ── */}
        <RevealStagger
          className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3"
          data-node-id="65:80381"
        >
          <RevealStaggerItem className="min-w-0">
            <StatCard
              value="500K+"
              body="Trusted by students worldwide, enrolled learners continue growing skills, advancing careers."
              nodeIds={[
                "65:80382",
                "65:80383",
                "65:80384",
                "65:80385",
                "65:80386",
                "65:80387",
              ]}
            />
          </RevealStaggerItem>
          <RevealStaggerItem className="min-w-0">
            <StatCard
              value="300+"
              body="Experienced industry professionals delivering practical knowledge, real-world insights."
              nodeIds={[
                "65:80394",
                "65:80395",
                "65:80396",
                "65:80397",
                "65:80398",
                "65:80399",
              ]}
            />
          </RevealStaggerItem>
          <RevealStaggerItem className="min-w-0">
            <StatCard
              value="95%"
              body="High learner satisfaction driven by quality content, expert instruction, and measurable learning."
              nodeIds={[
                "65:80406",
                "65:80407",
                "65:80408",
                "65:80409",
                "65:80410",
                "65:80411",
              ]}
            />
          </RevealStaggerItem>
        </RevealStagger>
      </PageContainer>
    </section>
  );
}
