import { Icon } from "iconsax-react";

export function SectionTitle({ title, Icon }: { title: string; Icon: Icon }) {
  return (
    <p
      className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl border border-granite-gray"
      data-aos="fade-left"
    >
      <Icon size="20" className="text-platinum" />
      <span className="text-sm text-platinum">{title}</span>
    </p>
  );
}
