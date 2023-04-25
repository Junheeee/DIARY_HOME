import { useCallback } from 'react';
import {
  changeInfiniteScrollDataToArray,
  infiniteApi
} from '../../modules/infinite/infiniteApi';
import { useIntersectionObserver } from '../../modules/infinite/useIntersectionObserver';
import { GetServerSideProps } from 'next';
import { QueryClient, dehydrate } from 'react-query';

export const getServerSideProps: GetServerSideProps<{}> = async context => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [infiniteApi.queryKey],
    queryFn: () => infiniteApi.queryFn({ pageParam: 0 })
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  };
};

export default function Infinite() {
  const { data: payload, fetchNextPage, hasNextPage } = infiniteApi.useWhy();
  const list = changeInfiniteScrollDataToArray(payload);

  const onIntersect = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [target] = entries;
      if (target.isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    },
    [hasNextPage, fetchNextPage]
  );

  const { setTarget } = useIntersectionObserver({
    onIntersect,
    options: {
      rootMargin: '10%',
      threshold: 0.25
    }
  });
  return (
    <table style={{ width: '100%' }}>
      <thead>
        <tr>
          <th
            style={{
              background: '#f4f4f4',
              padding: '12px 10px',
              textAlign: 'center',
              border: '1px solid #ddd'
            }}
          >
            ID
          </th>
        </tr>
      </thead>
      <tbody>
        {list?.map((project: any) => (
          <>
            <tr>
              <td
                style={{
                  padding: '12px 10px',
                  textAlign: 'center',
                  border: '1px solid #ddd'
                }}
              >
                {project.id} / {project.name}
              </td>
            </tr>
          </>
        ))}
        {hasNextPage && <div ref={elem => setTarget(elem)}>로딩중...</div>}
      </tbody>
    </table>
  );
}
