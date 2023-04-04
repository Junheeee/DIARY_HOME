export interface BOARD {
  boardSno: number;
  title: string;
  content: string;
  createDt: string;
  createUserId: string;
}

export const boardPerPage = 5; //한 화면에 표출되는 게시글 수
export const pagePerView = 3; //한 화면에 표출되는 페이지 수

export function getCutData(list: [BOARD], page: number) {
  const items: BOARD[] = list?.slice(
    (page - 1) * boardPerPage,
    page * boardPerPage
  );

  return items;
}

export function getTotalPage(total: number) {
  const arr = [];
  for (let i = 1; i <= Math.ceil(total / boardPerPage); i++) {
    arr.push(i);
  }
  return arr;
}

export function getCutPage(totalPage: number[]) {
  const pageLen = totalPage.length;
  const arr = [];
  for (let i = 0; i < pageLen; i += pagePerView) {
    arr.push(totalPage.slice(i, i + pagePerView));
  }

  return arr;
}
