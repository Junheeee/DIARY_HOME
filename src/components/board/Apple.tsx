/* eslint-disable react/jsx-key */
import { QueryClient, useQuery } from "react-query";
import { Box, Button, TextField } from "@mui/material";
import { DataGrid, GridRowParams } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import {
  useBoardAdd,
  useBoardApple,
  useBoardRemove,
} from "../../customHooks/board/useBoard";
import { useRouter } from "next/router";

export default function Apple() {
  const router = useRouter();
  const queryClient = new QueryClient();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [removeNo, setRemoveNo] = useState({});

  const board_list = useBoardApple();
  const board_add = useBoardAdd();
  const board_rem = useBoardRemove();

  if (board_list.isLoading) return <div>로딩중</div>;
  if (board_list.isError) return <div>에러</div>;

  const columns = [
    { field: "boardSno", headerName: "NO", width: 90 },
    {
      field: "title",
      headerName: "TITLE",
      width: 200,
      editable: true,
    },
    {
      field: "content",
      headerName: "CONTENT",
      width: 300,
      editable: true,
    },
    {
      field: "des",
      headerName: "DESCRIPTION",
      width: 150,
      editable: true,
      renderCell: (row: any) => (
        <strong>
          <Button
            variant="outlined"
            size="small"
            onClick={() => {
              router.push(`/board/detail/${row.id}`);
            }}
          >
            DES
          </Button>
        </strong>
      ),
    },
  ];

  return (
    <div>
      <div>
        <TextField
          id="userId"
          name="userId"
          label="TITLE"
          maxRows={1}
          variant="standard"
          value={title}
          onChange={({ target: { value } }) => setTitle(value)}
        />
        <TextField
          id="userId"
          name="userId"
          label="CONTENT"
          maxRows={1}
          variant="standard"
          value={content}
          onChange={({ target: { value } }) => setContent(value)}
        />
        <Button
          style={{ margin: "20px 20px 10px 20px" }}
          variant="outlined"
          size="small"
          onClick={() => {
            board_add.mutate(
              {
                boardSno: 0,
                title: title,
                content: content,
              },
              {
                onSuccess: (data) => {
                  setTitle("");
                  setContent("");
                  board_list.refetch();
                  // queryClient.invalidateQueries("test");
                },
              }
            );
          }}
        >
          ADD
        </Button>
        <Button
          style={{ margin: "20px 0px 10px 0px" }}
          variant="outlined"
          size="small"
          onClick={() => {
            board_rem.mutate(
              { boardSnoList: removeNo, delYn: "Y" },
              {
                onSuccess: (data) => {
                  console.log(data);
                  alert("삭제완료");
                  board_list.refetch();
                },
              }
            );
          }}
        >
          REMOVE
        </Button>
      </div>
      <div style={{ height: 375, width: "auto" }}>
        <DataGrid
          rows={board_list.data}
          getRowId={(data) => data.boardSno}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          onSelectionModelChange={(ids) => {
            setRemoveNo(ids);
          }}
        />
      </div>
    </div>
  );
}
