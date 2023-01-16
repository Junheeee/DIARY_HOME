import Axios from "../../modules/utils/customAxiosUtil";
import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import Image from "next/image";
import kakao from "../../../public/images/kakao_login_medium_wide.png";
import goggle from "../../../public/images/btn_google_signin_light_normal_web@2x.png";
import apple from "../../../public/images/appleid_button@1x.png";
import styles from "../../../public/css/Login.module.css";
import { accountAPI } from "../../modules/account/accountApi";

export default function Login() {
  const [userId, setUserId] = useState();
  const [userPw, setUserPw] = useState();

  const onChangeListener = (value, name) => {
    if (name === "userId") {
      setUserId(value);
    } else if (name === "userPw") {
      setUserPw(value);
    }
  };

  const loginCheck = async (id, pw) => {
    const { data: users } = await accountAPI.checkLogin({
      userId: id,
      userPswd: pw,
    });
    console.log(users);
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
              onChange={(e) => {
                onChangeListener(e.target.value, e.target.name);
              }}
            />
            <TextField
              style={{ display: "flex" }}
              id="userPw"
              name="userPw"
              label="Password"
              type="password"
              maxRows={1}
              variant="standard"
              onChange={(e) => {
                onChangeListener(e.target.value, e.target.name);
              }}
            />
          </div>
        </Box>
        <Button
          variant="outlined"
          onClick={() => {
            loginCheck(userId, userPw);
          }}
        >
          LOGIN
        </Button>
      </div>
      <div className={styles.field_Box} style={{ float: "right" }}>
        <div className={styles.img_div}>
          <Image src={kakao} alt="logo" width="auto" height="auto" />
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
