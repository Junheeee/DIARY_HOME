/* eslint-disable react-hooks/exhaustive-deps */
import { useBoardDetail, useBoardSave } from "../../customHooks/board/useBoard";
import { useState, useEffect } from "react";
import { Box, Button, TextField } from "@mui/material";
import { useRouter } from "next/router";
import { QueryClient } from "react-query";

export default function Detail(props: any) {
  const { boardSno } = props;
  const id = Number(boardSno);

  const queryClient = new QueryClient();
  const router = useRouter();

  const { data: detail, isLoading } = useBoardDetail(id);
  const data = detail?.data;

  const board_save = useBoardSave();

  const [mode, setMode] = useState("DES");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (data) {
      setTitle(data.title);
      setContent(data.content);
    }
  }, [data]);

  if (isLoading) return <div>로딩중...</div>;

  return (
    <div style={{ margin: "30px 0px 0px 30px" }}>
      <div style={{ marginBottom: "20px" }}>
        {mode === "DES" ? (
          <>
            <Button
              style={{ marginRight: "10px" }}
              variant="outlined"
              size="small"
              onClick={() => {
                router.push("/board/apple");
              }}
            >
              뒤로가기
            </Button>
            <Button
              style={{ marginRight: "10px" }}
              variant="outlined"
              size="small"
              onClick={() => {
                setMode("UPD");
              }}
            >
              수정하기
            </Button>
          </>
        ) : (
          <>
            <Button
              style={{ marginRight: "10px" }}
              variant="outlined"
              size="small"
              onClick={() => {
                setTitle(data.title);
                setContent(data.content);
                setMode("DES");
              }}
            >
              돌아가기
            </Button>
            <Button
              style={{ marginRight: "10px" }}
              variant="outlined"
              size="small"
              onClick={() => {
                board_save.mutate(
                  { boardSno: data?.boardSno, title, content },
                  {
                    onSuccess: (data) => {
                      alert("저장 성공");
                      console.log(data);
                      router.push("/board/apple");
                    },
                  }
                );
              }}
            >
              저장하기
            </Button>
          </>
        )}
      </div>
      <div>
        {mode === "DES" ? (
          <div>
            <div style={{ marginBottom: "20px" }}>글번호: {data?.boardSno}</div>
            <div style={{ marginBottom: "20px" }}>제목: {data?.title}</div>
            <div style={{ marginBottom: "20px" }}>내용: {data?.content}</div>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ marginBottom: "20px" }}>글번호: {data?.boardSno}</div>
            <div style={{ marginBottom: "20px" }}>
              제목:{" "}
              <TextField
                style={{ width: "500px" }}
                id="title"
                name="title"
                value={title}
                maxRows={1}
                variant="standard"
                onChange={({ target: { value } }) => setTitle(value)}
              />
            </div>
            <div style={{ marginBottom: "10px" }}>
              내용:{" "}
              <TextField
                style={{ width: "500px" }}
                id="content"
                name="content"
                value={content}
                maxRows={1}
                variant="standard"
                onChange={({ target: { value } }) => setContent(value)}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
