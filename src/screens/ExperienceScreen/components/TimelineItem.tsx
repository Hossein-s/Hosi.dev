export interface TimelineItemProps {
  period: string;
  position: string;
  company?: string;
  current: boolean;
}

export function TimelineItem({ period, position, company, current }: TimelineItemProps) {
  return (
    <div
      className={`relative border-l-2 border-granite-gray pb-10 pl-9
                  before:w-5 before:h-5 before:rounded-xl before:absolute
                  before:-left-2.5 before:top-0
                  ${current ? "before:bg-icterine" : "before:bg-granite-gray"}`}
    >
      <p className={`text-sm ${current ? "text-icterine" : "text-spanish-gray"}`}>{period}</p>
      <p className="text-base text-white mt-6">{position}</p>
      <p className="text-sm text-spanish-gray mt-2">{company}</p>
    </div>
  );
}
