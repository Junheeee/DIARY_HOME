import Axios from "axios";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import { Divider, Header, Item, Loader } from "semantic-ui-react";
import ItemList from "../src/component/ItemList";
import Login from "../src/component/account/login";

export default function Home() {
  // const [list, setList] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  // const API_URL = process.env.NEXT_PUBLIC_API_URL;

  // const getData = () => {
  //   Axios.get(API_URL).then((res) => {
  //     setList(res.data);
  //     setIsLoading(false);
  //   });
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div>
      <Head>
        <title>HOME | 준희</title>
        <meta name="description" content="준희 홈입니다."></meta>
      </Head>

      <div>아무것도 없지만 홈이랍니다.</div>
    </div>
  );
}

// export async function getStaticProps() {
//   const apiUrl = process.env.apiUrl;
//   const res = await Axios.get(apiUrl);
//   const data = res.data;

//   return {
//     props: {
//       list: data,
//       name: process.env.name,
//     },
//   };
// }
