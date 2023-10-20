import { AppData } from "@/types/AppData";
import { readFileSync } from "fs";
import yaml from "yaml";

export function loadAppData(): AppData {
  const configString = readFileSync("config.yaml", "utf-8");
  const rawConfig = yaml.parse(configString);
  return AppData.parse(rawConfig);
}
