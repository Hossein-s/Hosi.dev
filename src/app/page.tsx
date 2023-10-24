import { IndexScreen } from "@/screens/IndexScreen";
import "@/styles/globals.scss";
import { loadAppData } from "@/utils/AppDataLoader";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const data = await loadAppData();

  return {
    title: `${data.name} — ${data.title}`,
  };
}

export default async function Index() {
  const data = await loadAppData();

  return <IndexScreen data={data} />;
}
