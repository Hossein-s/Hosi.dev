import { useSticky } from "@/hooks/useSticky";
import { Briefcase, Home2, MainComponent } from "iconsax-react";
import React, { MouseEvent, useMemo } from "react";

export function StickyNavbar() {
  const menus = useMemo(
    () => [
      { title: "Home", icon: Home2, anchor: "#home" },
      // { title: "About", icon: PictureFrame, anchor: "#about" },
      { title: "Work Experiences", icon: Briefcase, anchor: "#experiences" },
      { title: "Skills", icon: MainComponent, anchor: "#skills" },
    ],
    []
  );

  const onClickHandler = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const link = e.currentTarget.href;
    const elem = document.querySelector<HTMLElement>(link.substring(link.indexOf("#")));
    window.scrollTo({ top: elem!.offsetTop - 30, behavior: "smooth" });
  };

  const elementRef = useSticky();

  return (
    <div
      ref={elementRef as any}
      className={`flex-col absolute right-2.5 hidden
                  lg:inline-flex border border-granite-gray rounded-xl
                  py-5 px-3 gap-4`}
      data-aos="fade-left"
      data-aos-delay="500"
    >
      {menus.map((menu, idx) => (
        <a
          key={idx}
          href={menu.anchor}
          onClick={onClickHandler}
          className="text-granite-gray hover:text-white transition-all"
        >
          {React.createElement(menu.icon, { size: 20 })}
        </a>
      ))}
    </div>
  );
}
