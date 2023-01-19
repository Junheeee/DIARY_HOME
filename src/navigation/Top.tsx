import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import Link from "@mui/material/Link";

const Top = (props: any) => {
  const { sections, title } = props;
  const router = useRouter();
  return (
    <>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Button
          size="small"
          onClick={() => {
            router.push("/about");
          }}
        >
          Subscribe
        </Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
          onClick={() => {
            router.push("/");
          }}
        >
          <span style={{ cursor: "pointer" }}>DIARY</span>
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button
          variant="outlined"
          size="small"
          onClick={() => {
            router.push("/account/login");
          }}
        >
          Sign in
        </Button>
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
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </>
  );
};

export default Top;
