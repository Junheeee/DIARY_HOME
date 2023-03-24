import { QueryClient, useMutation, useQuery } from "react-query";
import { boardApi } from "../../modules/board/boardApi";

const queryClient = new QueryClient();

export function useBoardList() {
  const query = useQuery(["boardList"], boardApi.boardList, {
    staleTime: 10000,
    cacheTime: Infinity,
  });
  return query;
}

export function useBoardAdd() {
  const mutation = useMutation(boardApi.boardAdd);
  return mutation;
}

export function useBoardRemove() {
  const mutation = useMutation(boardApi.boardRemove);
  return mutation;
}

export function useBoardDetail(boardSno: number) {
  const query = useQuery(["apple", boardSno], boardApi.boardDetail, {
    staleTime: 5000,
    cacheTime: Infinity,
  });
  return query;
}

export function useBoardSave() {
  const mutation = useMutation(boardApi.boardSave);
  return mutation;
}
