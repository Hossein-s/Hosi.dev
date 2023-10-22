import { AppData } from "@/types/AppData";
import { promises as fs } from "fs";
import yaml from "yaml";

export async function loadAppData(): Promise<AppData> {
  const configString = await fs.readFile("config.yaml", "utf-8");
  const rawConfig = yaml.parse(configString);
  return AppData.parse(rawConfig);
}
