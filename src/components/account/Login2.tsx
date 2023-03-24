import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import LockIcon from "@mui/icons-material/Lock";
import IconButton from "@mui/material/IconButton";
import { useLogin, useUserLogin } from "../../customHooks/auth/useAuth";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  cookieStorage,
  COOKIE_ACCESS_TOKEN,
  COOKIE_REFRESH_TOKEN,
} from "../../modules/account/service/cookie";

export default function Login2() {
  const router = useRouter();
  const user_login = useUserLogin();

  const [userId, setUserId] = useState("");
  const [userPswd, setUserPswd] = useState("");

  const onLogin = useLogin((state: any) => state.onLogin);

  const signIn = () => {
    user_login.mutate(
      {
        userId,
        userPswd,
      },
      {
        onSuccess: (data) => {
          if (data?.errorCode) {
            alert("로그인 실패");
            setUserId("");
            setUserPswd("");
          } else {
            alert("로그인 성공");
            onLogin();
            // cookieStorage.setCookie(COOKIE_ACCESS_TOKEN, data.data.accessToken);
            // cookieStorage.setCookie(
            //   COOKIE_REFRESH_TOKEN,
            //   data.data.refreshToken
            // );
            router.push("/");
          }
        },
      }
    );
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <IconButton>
          <LockIcon color="primary" />
        </IconButton>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="userId"
                name="userId"
                label="Id"
                autoComplete="id"
                value={userId}
                onChange={({ target: { value } }) => {
                  setUserId(value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="userPw"
                name="userPw"
                label="Password"
                type="password"
                autoComplete="new-password"
                value={userPswd}
                onChange={({ target: { value } }) => setUserPswd(value)}
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="outlined"
            sx={{ mt: 3, mb: 2 }}
            onClick={() => {
              signIn();
            }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
