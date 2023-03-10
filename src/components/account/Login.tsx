import { Box, Button, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import Image from "next/image";
import kakao from "../../assets/images/kakao_login_medium_wide.png";
import goggle from "../../assets/images/btn_google_signin_light_normal_web@2x.png";
import apple from "../../assets/images/appleid_button@1x.png";
import styles from "../../assets/css/Login.module.css";
import {
  useKakaoLogin,
  useKakaoLogout,
  useKakaoUnlink,
  useLogin,
  useUserLogin,
} from "../../customHooks/auth/useAuth";

export default function Login() {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [token, setToken] = useState("");

  const kakao_login = useKakaoLogin();
  const kakao_logout = useKakaoLogout();
  const kakao_unlink = useKakaoUnlink();
  const user_login = useUserLogin();

  const { isUseLogin, onLogin, onLogout } = useLogin((state: any) => ({
    isUseLogin: state.isUseLogin,
    onLogin: state.onLogin,
    onLogout: state.onLogout,
  }));

  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    setIsLogin(isUseLogin);
  }, [isUseLogin]);

  const login = (type: string) => {
    if (type === "normal") {
      userLogin();
    } else if (type === "kakao") {
      kakaoLogin();
    }
  };

  const userLogin = async () => {
    user_login.mutate(
      {
        userId: userId,
        userPswd: userPw,
      },
      {
        onSuccess: (data) => {
          console.log(data);
          onLogin();
          setToken(token);
        },
      }
    );
  };

  const kakaoLogin = async () => {
    window.Kakao.Auth.loginForm({
      success(authObj: any) {
        const token = authObj.access_token;
        kakao_login.mutate(token, {
          onSuccess: (data) => {
            console.log(data);
            alert("로그인");
            onLogin();
            setToken(token);
          },
        });
      },
      fail(err: any) {
        console.log(err);
      },
    });
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
            login("normal");
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
                  kakao_logout.mutate(token, {
                    onSuccess: () => {
                      alert("로그아웃");
                      onLogout();
                      setToken("");
                    },
                  });
                }}
              >
                LOGOUT
              </Button>
              <Button
                style={{ marginLeft: "10px", cursor: "pointer" }}
                variant="outlined"
                onClick={() => {
                  kakao_unlink.mutate(token, {
                    onSuccess: () => {
                      alert("연결해제");
                      onLogout();
                      setToken("");
                    },
                  });
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
                login("kakao");
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
