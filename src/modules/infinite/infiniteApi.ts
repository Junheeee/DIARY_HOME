import { useInfiniteQuery } from 'react-query';
import Axios from '../utils/customAxiosUtil';

const GET_WHY = 'why/GET_WHY';

export const infiniteApi = {
  queryKey: GET_WHY,
  queryFn: async ({ pageParam = 0 }) => {
    const { data } = await Axios.get(
      `https://jsonplaceholder.typicode.com/comments?_start=${pageParam}&_limit=10`
    );

    if (data.length < 10) return { result: data, nextPage: undefined };

    return {
      result: data,
      nextPage: pageParam + 10
    };
  },
  getNextPageParam: (lastPage: any, pages: any) =>
    lastPage.nextPage ?? undefined,

  useWhy: function () {
    return useInfiniteQuery({
      queryKey: [this.queryKey],
      queryFn: this.queryFn,
      getNextPageParam: this.getNextPageParam
    });
  }
};

export const changeInfiniteScrollDataToArray: any = (list: any) => {
  const array: any = [];

  list?.pages?.forEach((page: any) => {
    array.push(...page.result);
  });

  return array;
};
