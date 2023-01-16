import { useRouter } from "next/router";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { Divider, Header } from "semantic-ui-react";
import { useSession, signIn, signOut } from "next-auth/react";
import styles from "../../public/css/Gnb.module.css";

/*eslint-disable */
export default function Gnb() {
  const router = useRouter();

  // if (router.pathname === "/") {
  //   activeItem = "home";
  // } else if (router.pathname === "/about") {
  //   activeItem = "about";
  // } else if (router.pathname === "/admin") {
  //   activeItem = "admin";
  // }

  // const goLink = (e, data) => {
  //   if (data.name === "home") {
  //     router.push("/");
  //   } else if (data.name === "about") {
  //     router.push("/about");
  //   }
  // };

  const { data: session } = useSession();

  return (
    <div role="presentation">
      <div className={styles.navbar}>
        <div style={{ cursor: "pointer" }}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              color="inherit"
              onClick={() => {
                router.push("/");
              }}
            >
              {/* <div style={{ display: "flex", flex: "100px 0 0" }}> */}
              {/* <img
                  src="/images/cat.png"
                  alt="logo"
                  style={{ display: "block", width: 80 }}
                /> */}
              {/* </div> */}
              <div style={{ padding: 20 }}>
                <Header as="h3">DIARY</Header>
              </div>
            </Link>
          </Breadcrumbs>
        </div>

        <div style={{ paddingRight: 20, cursor: "pointer" }}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              color="inherit"
              onClick={() => {
                router.push("/account/login");
              }}
            >
              <div style={{ padding: 20 }}>login</div>
            </Link>
            {/* {session ? (
              <Link
                underline="hover"
                color="inherit"
                onClick={() => {
                  signOut();
                  // router.push("/login");
                }}
              >
                <div style={{ padding: 20 }}>logout</div>
              </Link>
            ) : (
              <Link
                underline="hover"
                color="inherit"
                onClick={() => {
                  signIn();
                  // router.push("/login");
                }}
              >
                <div style={{ padding: 20 }}>login</div>
              </Link>
            )} */}

            <Link
              underline="hover"
              color="inherit"
              onClick={() => {
                router.push("/about");
              }}
            >
              <div style={{ padding: 20 }}>about</div>
            </Link>
          </Breadcrumbs>
        </div>
      </div>
      <Divider />
    </div>
  );
}
