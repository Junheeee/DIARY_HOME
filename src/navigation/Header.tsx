import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import Link from "@mui/material/Link";
import { useLogin } from "../customHooks/auth/useAuth";
import { useState, useEffect } from "react";

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
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        {/* <Button
          size="small"
          onClick={() => {
            router.push("/about");
          }}
        >
          About
        </Button> */}
        <Typography
          component="h2"
          variant="h4"
          color="inherit"
          align="left"
          noWrap
          sx={{ flex: 1 }}
        >
          <span
            style={{ cursor: "pointer" }}
            onClick={() => {
              document.location.href = "/";
            }}
          >
            {title}
          </span>
        </Typography>
        {/* <IconButton>
          <SearchIcon />
        </IconButton> */}
        {isLogin ? (
          <>
            <Button
              variant="outlined"
              size="small"
              onClick={() => {
                onLogout();
                alert("로그아웃 완료");
              }}
            >
              LOGOUT
            </Button>
          </>
        ) : (
          <>
            {/* <Button
              variant="outlined"
              size="small"
              onClick={() => {
                router.push("/account/login");
              }}
            >
              Sign in
            </Button> */}
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
          </>
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
