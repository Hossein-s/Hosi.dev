import "@/app/globals.scss";
import { IndexScreen } from "@/screens/IndexScreen";
import { loadAppData } from "@/utils/AppDataLoader";
import Head from "next/head";

export default async function Index() {
  const data = await loadAppData();

  return (
    <>
      <Head>
        <title>{`${data.name} — ${data.title}`}</title>
      </Head>

      <IndexScreen data={data} />
    </>
  );
}
