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

export default function Login() {
  const router = useRouter();

  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [token, setToken] = useState("");
  const [isLogin, setIsLogin] = useState(false);

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
    window.Kakao.Auth.loginForm({
      async success(authObj: any) {
        const { data: res } = await kakaoAPI.kakaoLogin(authObj.access_token);
        console.log(res.data);
        if (res.data) {
          setIsLogin(true);
          setToken(authObj.access_token);
        }
      },
      fail(err: any) {
        console.log(err);
      },
    });
  };

  const kakaoLogout = async () => {
    const { data: res } = await kakaoAPI.kakaoLogout(token);
    const code = res.data.code;
    if (code === 200) {
      alert("로그아웃 완료");
      setIsLogin(false);
    } else {
      alert("로그아웃 실패");
    }
  };

  const kakaoUnlink = async () => {
    const { data: res } = await kakaoAPI.kakaoUnlink(token);
    const code = res.data.code;
    if (code === 200) {
      alert("연결해제 완료");
      setIsLogin(false);
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
          {isLogin ? (
            <>
              <Button
                style={{ marginLeft: "10px", cursor: "pointer" }}
                variant="outlined"
                onClick={() => {
                  kakaoLogout();
                }}
              >
                LOGOUT
              </Button>
              <Button
                style={{ marginLeft: "10px", cursor: "pointer" }}
                variant="outlined"
                onClick={() => {
                  kakaoUnlink();
                }}
              >
                UNLINK
              </Button>
            </>
          ) : (
            <Image
              className={styles.img}
              src={kakao}
              alt="logo"
              onClick={() => {
                kakaoLogin();
              }}
            />
          )}
        </div>
        <div className={styles.img_div}>
          <Image
            className={styles.img}
            src={goggle}
            alt="logo"
            width="305"
            height="70"
            priority
          />
        </div>
        <div className={styles.img_div}>
          <Image className={styles.img} src={apple} alt="logo" />
        </div>
      </div>
    </div>
  );
}
