import Axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Login from "../component/account/Login";

export default function Admin() {
  // const router = useRouter();
  // const [isLogin, setIsLogin] = useState(false);

  // function checkLogin() {
  //   Axios.get("/api/isLogin").then((res) => {
  //     if (res.status === 200 && res.data.name) {
  //       setIsLogin(true);
  //     } else {
  //       router.push("/login");
  //     }
  //   });
  // }

  // function logout() {
  //   Axios.get("/api/logout").then((res) => {
  //     if (res.status === 200) {
  //       router.push("/");
  //     }
  //   });
  // }
  // useEffect(() => {
  //   checkLogin();
  // }, []);

  return <Login />;
}
