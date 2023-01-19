import Head from "next/head";
import Blog from "../../test/Blog";
import Typography from "@mui/material/Typography";

export default function Home() {
  return (
    <div>
      <Head>
        <title>HOME | 준희</title>
        <meta name="description" content="준희 홈입니다."></meta>
      </Head>

      {/* <div>아무것도 없지만 홈이랍니다.</div> */}
      {/* <Typography variant="h6" style={{ padding: "10px" }}>
        아무것도 없지만 홈이랍니다.
      </Typography> */}
      <Blog />
    </div>
  );
}
