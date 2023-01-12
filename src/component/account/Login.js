import { Box, Button, TextField } from "@mui/material";
import Axios from "axios";
import { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";

export default function Login() {
  const { data: session } = useSession();
  const router = useRouter();

  const [userId, setUserId] = useState();
  const [userPw, setUserPw] = useState();

  const onChangeListener = (value, name) => {
    if (name === "userId") {
      setUserId(value);
    } else if (name === "userPw") {
      setUserPw(value);
    }
  };

  const loginCheck = (id, pw) => {
    Axios.post("http://localhost:8080/api/cstmr/login", {
      userId: id,
      userPswd: pw,
    }).then((res) => {
      console.log(res);
    });
    // const url = `http://localhost:8080/api/cstmr/login`;
    // Axios.get(url, rq).then((res) => {
    //   console.log(res.data);
    //   if (res.data.data === 200) {
    //     signIn();
    //     router.push("/");
    //   }
    // });
    console.log(session);
  };

  return (
    <div style={{ padding: "100px 0", textAlign: "center" }}>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div style={{ padding: 20 }}>
          <TextField
            id="standard-basic"
            name="userId"
            label="ID"
            maxRows={1}
            variant="standard"
            onChange={(e) => {
              onChangeListener(e.target.value, e.target.name);
            }}
          />
          <TextField
            id="standard-basic"
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
  );
}
