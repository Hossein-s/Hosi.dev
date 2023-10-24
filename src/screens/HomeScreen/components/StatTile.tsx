export function StatTile({ number, description }: { number: string; description: string }) {
  return (
    <div className="flex flex-col max-w-[100px] text-center">
      <div className="text-5xl lg:text-6xl leading-normal lg:leading-normal text-icterine">
        {number}
      </div>
      <div className="text-sm lg:text-base leading-normal lg:leading-normal text-spanish-gray">
        {description}
      </div>
    </div>
  );
}
