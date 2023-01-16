import Icon from "@mui/icons-material/ReportGmailerrorredRounded";

export default function Error404() {
  return (
    <div
      style={{
        display: "flex",
        padding: "150px 0",
        alignContent: "center",
        justifyContent: "center",
        fontSize: 30,
      }}
    >
      <div
        style={{
          display: "flex",
          margin: "50px 0",
        }}
      >
        <Icon style={{ width: "50px", height: "50px", marginRight: "10px" }} />
        <span style={{ display: "flex", alignItems: "center" }}>
          404 : 페이지를 찾을 수 없습니다.
        </span>
      </div>
    </div>
  );
}
