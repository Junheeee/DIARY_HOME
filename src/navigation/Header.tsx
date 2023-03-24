/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/router";
import Link from "@mui/material/Link";
import { useLogin } from "../customHooks/auth/useAuth";
import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../public/image/logo.png";

const Top = (props: any) => {
  const { sections, title } = props;
  const router = useRouter();

  const { isUseLogin, onLogin, onLogout } = useLogin((state: any) => ({
    isUseLogin: state.isUseLogin,
    onLogin: state.onLogin,
    onLogout: state.onLogout,
  }));

  const [isLogin, setIsLogin] = useState();

  useEffect(() => {
    // console.log(isUseLogin);
    setIsLogin(isUseLogin);
  }, [isUseLogin]);
  return (
    <>
      <Toolbar
        sx={{ borderBottom: 1, borderColor: "divider" }}
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Image
            src={logo}
            alt={"로고"}
            width="130"
            style={{ cursor: "pointer" }}
            onClick={() => {
              document.location.href = "/";
            }}
          />
          <div style={{ margin: "0px 30px 0px 30px" }}>
            <Stack direction="row" spacing={2}>
              <Button style={{ padding: "0px 20px 0px 20px" }}>CAFE</Button>
              <Button style={{ padding: "0px 20px 0px 20px" }} disabled>
                STORE
              </Button>
              <Button
                style={{ padding: "0px 20px 0px 20px" }}
                href="#text-buttons"
              >
                Link
              </Button>
            </Stack>
          </div>
        </div>

        {isLogin ? (
          <div>
            <Button
              variant="outlined"
              size="small"
              onClick={() => {
                onLogout();
                alert("로그아웃 완료");
                document.location.href = "/";
              }}
            >
              LOGOUT
            </Button>
          </div>
        ) : (
          <div>
            <Button
              style={{ marginLeft: "5px" }}
              variant="outlined"
              size="small"
              onClick={() => {
                router.push("/account/register");
              }}
            >
              Sign up
            </Button>
          </div>
        )}
      </Toolbar>

      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: "space-between", overflowX: "auto" }}
      >
        {sections.map((section: any) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{ p: 1, flexShrink: 0 }}
            onClick={() => {
              router.push(`/board/${section.title}`);
            }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </>
  );
};

export default Top;
