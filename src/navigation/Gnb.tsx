import { useRouter } from "next/router";
import Breadcrumbs from "@mui/material/Breadcrumbs";
// import { Divider, Header } from "semantic-ui-react";
import styles from "../../public/css/Gnb.module.css";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Gnb() {
  const router = useRouter();

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
              <div style={{ padding: 20 }}>
                {/* <Header as="h3">DIARY</Header> */}
                <Typography variant="h6" gutterBottom>
                  DIARY
                </Typography>
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
      {/* <Divider /> */}
    </div>
  );
}
