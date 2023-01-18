/* eslint-disable react-hooks/rules-of-hooks */
import Axios from "../../modules/utils/customAxiosUtil";
import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import Image from "next/image";
import kakao from "../../../public/images/kakao_login_medium_wide.png";
import goggle from "../../../public/images/btn_google_signin_light_normal_web@2x.png";
import apple from "../../../public/images/appleid_button@1x.png";
import styles from "../../../public/css/Login.module.css";
import { accountAPI } from "../../modules/account/accountApi";
import { kakaoAPI } from "../../modules/kakao/kakaoApi";
import { useRouter } from "next/router";
import { KAKAO_AUTH_URL } from "../../configs/constants";

export default function Login({ data }) {
  const router = useRouter();

  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [token, setToken] = useState("");

  const loginCheck = async () => {
    const { data: users } = await accountAPI.checkLogin({
      userId: userId,
      userPswd: userPw,
    });
    if (users.data) {
      router.push("/");
    }

    // const user = {
    //   id: id,
    //   pw: pw,
    // };
    // const result = useQuery("getUsers", user);
  };

  const kakaoLogin = async () => {
    Kakao.Auth.loginForm({
      success(authObj) {
        getKakao(authObj.access_token);
      },
      fail(err) {
        console.log(err);
      },
    });
  };

  const getKakao = async (accessToken) => {
    // const { data: res } = await Axios.get(
    //   `/api/kakao/login?token=${accessToken}`
    // );
    const { data: res } = await kakaoAPI.kakaoLogin(accessToken);
    console.log(res);
    setToken(accessToken);
  };

  const kakaoLogout = async () => {
    const { status: code } = await Axios.get(
      `/api/kakao/logout?token=${token}`
    );
    if (code === 200) {
      alert("로그아웃 완료");
    } else {
      alert("로그아웃 실패");
    }
  };

  const kakaoUnlink = async () => {
    const { status: code } = await Axios.get(
      `/api/kakao/unlink?token=${token}`
    );
    if (code === 200) {
      alert("연결해제 완료");
    } else {
      alert("연결해제 실패");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        padding: "100px 0",
        textAlign: "center",
      }}
    >
      <div
        className={styles.field_Box}
        style={{
          float: "left",
          borderRight: "1px solid #DEDEDF",
        }}
      >
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div className={styles.textField_Box}>
            <TextField
              style={{ display: "flex" }}
              id="userId"
              name="userId"
              label="ID"
              maxRows={1}
              variant="standard"
              value={userId}
              onChange={({ target: { value } }) => setUserId(value)}
            />
            <TextField
              style={{ display: "flex" }}
              id="userPw"
              name="userPw"
              label="Password"
              type="password"
              maxRows={1}
              variant="standard"
              value={userPw}
              onChange={({ target: { value } }) => setUserPw(value)}
            />
          </div>
        </Box>
        <Button
          variant="outlined"
          onClick={() => {
            loginCheck();
          }}
        >
          LOGIN
        </Button>
      </div>
      <div className={styles.field_Box} style={{ float: "right" }}>
        <div className={styles.img_div}>
          {token ? (
            <></>
          ) : (
            <>
              <Image
                src={kakao}
                alt="logo"
                width="auto"
                height="auto"
                onClick={() => {
                  kakaoLogin();
                }}
              />
            </>
          )}

          <Button
            style={{ marginLeft: "10px" }}
            variant="outlined"
            onClick={() => {
              kakaoLogout();
            }}
          >
            LOGOUT
          </Button>
          <Button
            style={{ marginLeft: "10px" }}
            variant="outlined"
            onClick={() => {
              kakaoUnlink();
            }}
          >
            UNLINK
          </Button>
        </div>
        <div className={styles.img_div}>
          <Image src={goggle} alt="logo" width="305" height="70" priority />
        </div>
        <div className={styles.img_div}>
          <Image src={apple} alt="logo" width="auto" height="auto" />
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await Axios.get({ KAKAO_AUTH_URL });

  return { props: { data } };
}
