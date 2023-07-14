import { useSticky } from "@/hooks/useSticky";
import { Link, VStack } from "@chakra-ui/react";
import { Briefcase, Home2, MainComponent, PictureFrame, Sms } from "iconsax-react";
import React, { useMemo } from "react";

export function StickyNavbar() {
  const menus = useMemo(
    () => [
      { title: "Home", icon: Home2, anchor: "#home" },
      { title: "About", icon: PictureFrame, anchor: "#about" },
      { title: "Work Experiences", icon: Briefcase, anchor: "#experiences" },
      { title: "Skills", icon: MainComponent, anchor: "#skills" },
      { title: "Contact", icon: Sms, anchor: "#contact" },
    ],
    []
  );

  const elementRef = useSticky();

  return (
    <VStack
      ref={elementRef as any}
      position="absolute"
      right="10px"
      display="inline-flex"
      padding="1.1rem 0.8rem"
      spacing={15}
      border="1px solid #666"
      borderRadius={14}
      data-aos="fade-left"
      data-aos-delay="500"
    >
      {menus.map((menu, idx) => (
        <Link key={idx} href={menu.anchor} color="#666666" _hover={{ color: "#fff" }}>
          {React.createElement(menu.icon, { size: 20 })}
        </Link>
      ))}
    </VStack>
  );
}
