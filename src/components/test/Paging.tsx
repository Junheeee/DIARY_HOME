import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useBoardList } from '../../customHooks/board/useBoard';
import { useEffect, useState } from 'react';
import {
  getCutData,
  getCutPage,
  getTotalPage,
  pagePerView,
  BOARD
} from './AssistPaging';

export default function Paging() {
  const board_list = useBoardList();
  const data: [BOARD] = board_list.data;
  const totalPage = getTotalPage(data?.length);

  const [cutData, setCutData] = useState<BOARD[]>([]); //화면에 표출되는 게시글 5개
  const [cutPage, setCutPage] = useState<number[]>([]); //화면에 표출되는 페이지 3개
  const [nowPage, setNowPage] = useState<number>(1); //현재 페이지(개별)
  const [nowPageArr, setNowPageArr] = useState<number>(1); //현재 페이지(묶음)

  useEffect(() => {
    if (data?.length > 0) {
      setCutData(getCutData(data, nowPage));

      if (totalPage.length > 0 && totalPage.length < pagePerView) {
        setCutPage(totalPage);
      } else {
        setCutPage(getCutPage(totalPage)[nowPageArr - 1]);
      }
    }
  }, [data]);

  const pageUpdate = (increment: number) => {
    const _cutPage = getCutPage(totalPage)[nowPageArr + increment - 1];
    const _cutData = getCutData(data, _cutPage[0]);
    setCutData(_cutData);
    setCutPage(_cutPage);
    setNowPage(_cutPage[0]);
    setNowPageArr(nowPageArr + increment);
  };

  const prevNext = (type: string) => {
    if (type == 'prev') {
      pageUpdate(-1);
    } else if (type == 'next') {
      pageUpdate(1);
    }
  };

  const pageClick = (page: number) => {
    setCutData(getCutData(data, page));
    setNowPage(page);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label='customized table'>
          <TableHead>
            <TableRow>
              <TableCell align='right'>글번호</TableCell>
              <TableCell align='right'>글제목</TableCell>
              <TableCell align='right'>글내용</TableCell>
              <TableCell align='right'>작성일자</TableCell>
              <TableCell align='right'>작성자</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {board_list?.data ? (
              cutData?.map(row => (
                <TableRow key={row.boardSno}>
                  <TableCell align='right'>{row.boardSno}</TableCell>
                  <TableCell align='right'>{row.title}</TableCell>
                  <TableCell align='right'>{row.content}</TableCell>
                  <TableCell align='right'>{row.createDt}</TableCell>
                  <TableCell align='right'>{row.createUserId}</TableCell>
                </TableRow>
              ))
            ) : (
              <></>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <div className='paging-container'>
        <nav
          aria-label='pagination navigation'
          style={{
            display: 'block'
          }}
        >
          <ul className='paging-ul'>
            <li>
              <button
                id='prev'
                className={
                  nowPageArr == 1 ? 'paging-btn-click' : 'paging-btn-unclick'
                }
                disabled={nowPageArr == 1 ? true : false}
                onClick={e => prevNext('prev')}
              >
                ≪<span></span>
              </button>
            </li>
            {cutPage?.map(row => (
              <li>
                <button
                  id='prev'
                  className={
                    Number(row) == nowPage
                      ? 'paging-btn-click'
                      : 'paging-btn-unclick'
                  }
                  onClick={e => {
                    const target = e.target as HTMLElement;
                    pageClick(Number(target.innerText));
                  }}
                >
                  {row}
                  <span></span>
                </button>
              </li>
            ))}
            <li>
              <button
                id='next'
                className={
                  cutPage.filter(r => r == totalPage.length).length > 0
                    ? 'paging-btn-click'
                    : 'paging-btn-unclick'
                }
                disabled={
                  cutPage.filter(r => r == totalPage.length).length > 0
                    ? true
                    : false
                }
                onClick={e => prevNext('next')}
              >
                ≫<span></span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
