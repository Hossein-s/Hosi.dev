import { AppData } from "@/types/AppData";
import { readFileSync } from "fs";
import path from "path";
import yaml from "yaml";

export function loadStaticProps(): { props: AppData } {
  const configString = readFileSync("config.yaml", "utf-8");
  const rawConfig = yaml.parse(configString);
  const props = AppData.parse(rawConfig);

  return { props };
}
