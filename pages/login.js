import Axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button } from "semantic-ui-react";
import Login from "../src/component/account/login";

export default function Admin() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);

  function checkLogin() {
    Axios.get("/api/isLogin").then((res) => {
      if (res.status === 200 && res.data.name) {
        setIsLogin(true);
      } else {
        router.push("/login");
      }
    });
  }

  function logout() {
    Axios.get("/api/logout").then((res) => {
      if (res.status === 200) {
        router.push("/");
      }
    });
  }
  useEffect(() => {
    checkLogin();
  }, []);

  return (
    // <>
    //   admin
    //   {isLogin && (
    //     <Button color="blue" onClick={logout}>
    //       Logout
    //     </Button>
    //   )}
    // </>
    <Login />
  );
}
