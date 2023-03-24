import Head from "next/head";
import BlogContatiner from "../containers/blog/BlogContainer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>HOME | 준희</title>
        <meta name="description" content="준희 홈입니다."></meta>
      </Head>

      <BlogContatiner />
    </div>
  );
}
