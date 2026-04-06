"use client";

import { ReactNode, useEffect, useRef } from "react";

export function SharedDetailLayout({
  leftContent,
  rightCard,
  sectionBg = "bg-[#f1f1f1]",
  stopSelector,
  stickyDesktop = false,
  rightCardClassName = "",
}: {
  leftContent: ReactNode;
  rightCard: ReactNode;
  sectionBg?: string;
  stopSelector?: string;
  stickyDesktop?: boolean;
  rightCardClassName?: string;
}) {
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!stickyDesktop) return;

    const sidebarNode = sidebarRef.current;
    const STOP_GAP = 24;
    let baseTop = 0;
    let fixedLeft = 0;
    let fixedWidth = 0;
    let rafId = 0;

    const resetCardStyle = () => {
      const card = cardRef.current;
      if (!card) return;
      card.style.position = "";
      card.style.top = "";
      card.style.left = "";
      card.style.width = "";
      card.style.transform = "";
      card.style.zIndex = "";
      card.style.willChange = "";
    };

    const measureBase = () => {
      const sidebar = sidebarRef.current;
      const card = cardRef.current;
      if (!sidebar || !card) return;
      const cardRect = card.getBoundingClientRect();
      const sidebarRect = sidebar.getBoundingClientRect();
      baseTop = cardRect.top;
      fixedLeft = sidebarRect.left;
      fixedWidth = sidebarRect.width;
      sidebar.style.minHeight = `${Math.ceil(cardRect.height)}px`;
    };

    const update = () => {
      const sidebar = sidebarRef.current;
      const card = cardRef.current;
      if (!sidebar || !card) return;

      if (window.innerWidth < 1024) {
        sidebar.style.minHeight = "";
        resetCardStyle();
        return;
      }

      if (baseTop === 0) measureBase();

      const scrollY = window.scrollY;
      const cardHeight = card.offsetHeight;
      let offsetY = 0;

      if (stopSelector) {
        const stopEl = document.querySelector(stopSelector) as HTMLElement | null;
        if (stopEl) {
          const stopY = stopEl.getBoundingClientRect().top + scrollY;
          const maxTop = stopY - scrollY - cardHeight - STOP_GAP;
          offsetY = Math.max(0, baseTop - maxTop);
        }
      }

      card.style.position = "fixed";
      card.style.top = `${baseTop}px`;
      card.style.left = `${fixedLeft}px`;
      card.style.width = `${fixedWidth}px`;
      card.style.transform = `translate3d(0,-${Math.round(offsetY)}px,0)`;
      card.style.zIndex = "30";
      card.style.willChange = "transform";
    };

    const onScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = 0;
        update();
      });
    };

    const onResize = () => {
      baseTop = 0;
      fixedLeft = 0;
      fixedWidth = 0;
      update();
    };

    measureBase();
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (rafId) window.cancelAnimationFrame(rafId);
      resetCardStyle();
      if (sidebarNode) sidebarNode.style.minHeight = "";
    };
  }, [stickyDesktop, stopSelector]);

  return (
    <section className={`w-full ${sectionBg}`}>
      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col px-[clamp(1rem,4vw,3.75rem)] pt-12 pb-12 md:pt-[clamp(4rem,10vw,7.5rem)] md:pb-[clamp(4.5rem,11vw,10rem)]">
        <div className="relative flex w-full flex-col items-start gap-8 md:gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-2">
          
          <div className="relative flex w-full shrink-0 flex-col items-start gap-4 md:gap-8 lg:w-[877px] lg:max-w-[877px]">
            {leftContent}
          </div>

          <div
            ref={sidebarRef}
            className="relative flex w-full shrink-0 flex-col items-start gap-4 md:gap-6 lg:w-[435px] lg:max-w-[435px] lg:self-start lg:h-fit"
          >
            <div
              ref={cardRef}
              className={`relative flex w-full shrink-0 flex-col gap-8 rounded-xl bg-white p-4 sm:p-5 md:p-6 md:gap-10 ${rightCardClassName}`}
            >
              {rightCard}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
