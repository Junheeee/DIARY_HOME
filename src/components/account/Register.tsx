/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import LockIcon from '@mui/icons-material/Lock';
import IconButton from '@mui/material/IconButton';
import styles from '../../assets/css/Register.module.css';
import {
  useKakaoLogin,
  useLogin,
  useRegister
} from '../../customHooks/auth/useAuth';
import { GOOGLE_CLIENT_ID, GOOGLE_SECRET } from '../../configs/constants';

declare global {
  interface Window {
    google: any;
    Kakao: any;
  }
}

export default function Register() {
  const [userId, setUserId] = useState('');
  const [userPswd, setUserPswd] = useState('');

  const router = useRouter();

  const kakao_login = useKakaoLogin();
  const register = useRegister();

  const onLogin = useLogin((state: any) => state.onLogin);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    register.mutate(
      {
        userId: String(data.get('userId')),
        userPswd: String(data.get('userPw'))
      },
      {
        onSuccess: data => {
          console.log(data);
          alert('회원가입 성공');
          router.push('/account/login2');
        }
      }
    );
  };

  const login = (type: string) => {
    if (type == 'normal') {
      console.log('normal');
    } else if (type == 'kakao') {
      kakaoLogin();
    } else if (type == 'google') {
      googleLogin();
    } else if (type == 'apple') {
      console.log('apple');
    }
  };

  const googleLogin = () => {
    console.log(GOOGLE_CLIENT_ID, GOOGLE_SECRET);
  };

  const kakaoLogin = () => {
    window.Kakao.init(KAKAO_KEY);
    window.Kakao.Auth.loginForm({
      success(authObj: any) {
        const token = authObj.access_token;
        kakao_login.mutate(token, {
          onSuccess: data => {
            alert('로그인');
            onLogin();
            router.push('/');
          }
        });
      },
      fail(err: any) {
        console.log(err);
      }
    });
  };

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <IconButton>
          <LockIcon color='primary' />
        </IconButton>
        <Typography component='h1' variant='h5'>
          Sign up
        </Typography>
        <Box component='form' noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id='userId'
                name='userId'
                label='Id'
                autoComplete='id'
                onChange={({ target: { value } }) => setUserId(value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id='userPw'
                name='userPw'
                label='Password'
                type='password'
                autoComplete='new-password'
                onChange={({ target: { value } }) => setUserPswd(value)}
              />
            </Grid>
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='outlined'
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <div className={styles.sns}>
            <img
              src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzOCIgaGVpZ2h0PSIzOCIgdmlld0JveD0iMCAwIDM4IDM4Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBjeD0iMTkiIGN5PSIxOSIgcj0iMTkiIGZpbGw9IiNGQUU0MDAiLz4KICAgICAgICA8Zz4KICAgICAgICAgICAgPHBhdGggZD0iTTAgMEgyNFYyNEgweiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNyA3KSIvPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjM0MxRTFFIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0xMS45OTIgMy42OTJjNS4wOTMgMCA5LjIyMiAzLjMwMyA5LjIyMiA3LjM3N3MtNC4xMjkgNy4zNzYtOS4yMjIgNy4zNzZjLS41NTIgMC0xLjA5Mi0uMDM4LTEuNjE2LS4xMTNsLTMuNjQgMi41MTJjLS4xNzIuMTItLjM2OC0uMDIxLS4zNDMtLjE5My4wMTQtLjEwMi4yNy0xLjIwMi43NjUtMy4yOTktMi42MzMtMS4yOTgtNC4zODktMy42MjctNC4zODktNi4yODMgMC00LjA3NCA0LjEzLTcuMzc3IDkuMjIzLTcuMzc3eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNyA3KSIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=='
              onClick={() => {
                login('kakao');
              }}
            />
            <img
              src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzOCIgaGVpZ2h0PSIzOCIgdmlld0JveD0iMCAwIDM4IDM4Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBjeD0iMTkiIGN5PSIxOSIgcj0iMTkiIGZpbGw9IiNGRkYiLz4KICAgICAgICA8Zz4KICAgICAgICAgICAgPHBhdGggZD0iTTAgMEgyNFYyNEgweiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNyA3KSIvPgogICAgICAgICAgICA8ZyBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICAgICAgPHBhdGggZmlsbD0iIzQyODVGNCIgZD0iTTE2LjczNSA4LjczM2MwLS42MDYtLjA1NC0xLjE4OC0uMTU1LTEuNzQ3SDguNTM4djMuMzAzaDQuNTk2Yy0uMTk4IDEuMDY3LS44IDEuOTcxLTEuNzA0IDIuNTc3djIuMTQyaDIuNzZjMS42MTQtMS40ODYgMi41NDUtMy42NzUgMi41NDUtNi4yNzV6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3IDcpIHRyYW5zbGF0ZSgzLjQ2MiAzLjQ2MikiLz4KICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9IiMzNEE4NTMiIGQ9Ik04LjUzOCAxNy4wNzdjMi4zMDYgMCA0LjIzOS0uNzY1IDUuNjUxLTIuMDY5bC0yLjc2LTIuMTQyYy0uNzY0LjUxMi0xLjc0Mi44MTUtMi44OS44MTUtMi4yMjQgMC00LjEwNy0xLjUwMi00Ljc3OC0zLjUySC45MDh2Mi4yMTJjMS40MDUgMi43OSA0LjI5MyA0LjcwNCA3LjYzIDQuNzA0eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNyA3KSB0cmFuc2xhdGUoMy40NjIgMy40NjIpIi8+CiAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSIjRkJCQzA1IiBkPSJNMy43NiAxMC4xNmMtLjE3LS41MTItLjI2Ny0xLjA1OS0uMjY3LTEuNjIyIDAtLjU2Mi4wOTctMS4xMS4yNjgtMS42MjJWNC43MDRILjkwOEMuMzMgNS44NTcgMCA3LjE2IDAgOC41MzhjMCAxLjM3OC4zMyAyLjY4Mi45MDggMy44MzVsMi44NTMtMi4yMTJ6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3IDcpIHRyYW5zbGF0ZSgzLjQ2MiAzLjQ2MikiLz4KICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNFQTQzMzUiIGQ9Ik04LjUzOCAzLjM5NmMxLjI1NCAwIDIuMzguNDMgMy4yNjQgMS4yNzdsMi40NS0yLjQ1QzEyLjc3MS44NDcgMTAuODQgMCA4LjUzNyAwIDUuMjAxIDAgMi4zMTMgMS45MTMuOTA4IDQuNzA0bDIuODUzIDIuMjEyYy42NzEtMi4wMTggMi41NTQtMy41MiA0Ljc3Ny0zLjUyeiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNyA3KSB0cmFuc2xhdGUoMy40NjIgMy40NjIpIi8+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo='
              onClick={() => {
                login('google');
              }}
              // ref={googleSignInButton}
            />
            <div className='buttonDiv'>버튼</div>
            <img
              src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzOCIgaGVpZ2h0PSIzOCIgdmlld0JveD0iMCAwIDM4IDM4Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBjeD0iMTkiIGN5PSIxOSIgcj0iMTkiIGZpbGw9IiNGRkYiLz4KICAgICAgICA8Zz4KICAgICAgICAgICAgPHBhdGggZD0iTTAuOTIzIDAuOTIzSDIzLjA3Njk5OTk5OTk5OTk5OFYyMy4wNzY5OTk5OTk5OTk5OThIMC45MjN6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3IDcpIi8+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiMwMDAiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTEyLjAyNCA0Ljk2Yy44OSAwIDIuMDA3LS41ODkgMi42NzEtMS4zNzQuNjAzLS43MTEgMS4wNDItMS43MDUgMS4wNDItMi42OTggMC0uMTM1LS4wMTMtLjI3LS4wMzgtLjM4LS45OTEuMDM2LTIuMTgzLjY1LTIuODk4IDEuNDcxLS41NjQuNjI2LTEuMDc4IDEuNjA3LTEuMDc4IDIuNjEzIDAgLjE0Ny4wMjUuMjk0LjAzNy4zNDMuMDYzLjAxMi4xNjMuMDI1LjI2NC4wMjV6TTguODg4IDE5LjhjMS4yMTcgMCAxLjc1Ni0uNzk3IDMuMjc0LS43OTcgMS41NDMgMCAxLjg4MS43NzIgMy4yMzYuNzcyIDEuMzMgMCAyLjIyLTEuMjAxIDMuMDYtMi4zNzkuOTQxLTEuMzQ5IDEuMzMtMi42NzQgMS4zNTUtMi43MzUtLjA4OC0uMDI0LTIuNjM0LTEuMDQyLTIuNjM0LTMuOSAwLTIuNDc4IDIuMDA3LTMuNTk0IDIuMTItMy42OC0xLjMzLTEuODY0LTMuMzUtMS45MTMtMy45MDEtMS45MTMtMS40OTMgMC0yLjcxLjg4My0zLjQ3NS44ODMtLjgyNyAwLTEuOTE5LS44MzQtMy4yMS0uODM0LTIuNDYgMC00Ljk1NSAxLjk4Ny00Ljk1NSA1Ljc0IDAgMi4zMy45MjggNC43OTYgMi4wNyA2LjM5Ljk3OCAxLjM1IDEuODMgMi40NTMgMy4wNiAyLjQ1M3oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDcgNykiLz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo='
              onClick={() => {
                login('apple');
              }}
            />
            <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzgiIGhlaWdodD0iMzgiIHZpZXdCb3g9IjAgMCAzOCAzOCI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0icHJlZml4X19hIiBkPSJNMC4wMDIgMC4wMDFMMzggMC4wMDEgMzggMzcuNzY5IDAuMDAyIDM3Ljc2OXoiLz4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPG1hc2sgaWQ9InByZWZpeF9fYiIgZmlsbD0iI2ZmZiI+CiAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3ByZWZpeF9fYSIvPgogICAgICAgIDwvbWFzaz4KICAgICAgICA8cGF0aCBmaWxsPSIjMTg3N0YyIiBkPSJNMzggMTlDMzggOC41MDcgMjkuNDkzIDAgMTkgMFMwIDguNTA3IDAgMTljMCA5LjQ4MyA2Ljk0OCAxNy4zNDQgMTYuMDMxIDE4Ljc3VjI0LjQ5MWgtNC44MjRWMTloNC44MjR2LTQuMTg2YzAtNC43NjIgMi44MzctNy4zOTIgNy4xNzctNy4zOTIgMi4wNzkgMCA0LjI1My4zNzEgNC4yNTMuMzcxdjQuNjc2aC0yLjM5NmMtMi4zNiAwLTMuMDk2IDEuNDY0LTMuMDk2IDIuOTY3VjE5aDUuMjdsLS44NDMgNS40OTJoLTQuNDI3VjM3Ljc3QzMxLjA1MiAzNi4zNDQgMzggMjguNDgzIDM4IDE5IiBtYXNrPSJ1cmwoI3ByZWZpeF9fYikiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjRkZGIiBkPSJNMjYuMzk2IDI0LjQ5MkwyNy4yMzggMTloLTUuMjd2LTMuNTY0YzAtMS41MDMuNzM3LTIuOTY3IDMuMDk3LTIuOTY3aDIuMzk2VjcuNzkzcy0yLjE3NC0uMzcxLTQuMjUzLS4zNzFjLTQuMzQgMC03LjE3NyAyLjYzLTcuMTc3IDcuMzkyVjE5aC00LjgyNHY1LjQ5Mmg0LjgyNFYzNy43N0MxNyAzNy45MjEgMTcuOTkgMzggMTkgMzhjMS4wMSAwIDIuMDAxLS4wNzkgMi45NjktLjIzVjI0LjQ5MWg0LjQyNyIgbWFzaz0idXJsKCNwcmVmaXhfX2IpIi8+CiAgICA8L2c+Cjwvc3ZnPgo=' />
          </div>
          <Grid container justifyContent='flex-end'>
            <Grid item>
              <Link variant='body2'>
                <span
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    router.push('/account/login2');
                  }}
                >
                  Already have an account? Sign in
                </span>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
