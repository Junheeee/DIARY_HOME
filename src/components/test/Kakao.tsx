import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import { KAKAO_KEY } from '../../configs/constants';
import Axios from '../../modules/utils/customAxiosUtil';

declare global {
  interface Window {
    kakao: any;
  }
}

export default function Kakao() {
  const [load, setLoad] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!window.Kakao || load) return;

    setLoad(true);
    window.Kakao.init(KAKAO_KEY);
  }, []);

  useEffect(() => {
    const query = router.query;
    if (query?.code) {
      link(String(query.code));
    }
  }, [router.query]);

  const popup = () => {
    window.Kakao.Auth.loginForm({
      success(authObj: any) {
        console.log(authObj);
      },
      fail(err: any) {
        console.log(err);
      }
    });
  };

  const redirect = () => {
    window.Kakao.Auth.authorize({
      redirectUrl: 'http://localhost:3001/Kakao'
    });
  };

  const link = async (code: string) => {
    const res = await Axios.get(
      `http://localhost:3000/api/kakaoLogin?code=${code}`
    );
    if (res?.data && res?.status == 200) {
      router.push('/');
    }
  };

  return (
    <div className='kakao-container'>
      <div className='kakao-component'>
        <img
          className='kakao-img'
          src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzOCIgaGVpZ2h0PSIzOCIgdmlld0JveD0iMCAwIDM4IDM4Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBjeD0iMTkiIGN5PSIxOSIgcj0iMTkiIGZpbGw9IiNGQUU0MDAiLz4KICAgICAgICA8Zz4KICAgICAgICAgICAgPHBhdGggZD0iTTAgMEgyNFYyNEgweiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNyA3KSIvPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjM0MxRTFFIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0xMS45OTIgMy42OTJjNS4wOTMgMCA5LjIyMiAzLjMwMyA5LjIyMiA3LjM3N3MtNC4xMjkgNy4zNzYtOS4yMjIgNy4zNzZjLS41NTIgMC0xLjA5Mi0uMDM4LTEuNjE2LS4xMTNsLTMuNjQgMi41MTJjLS4xNzIuMTItLjM2OC0uMDIxLS4zNDMtLjE5My4wMTQtLjEwMi4yNy0xLjIwMi43NjUtMy4yOTktMi42MzMtMS4yOTgtNC4zODktMy42MjctNC4zODktNi4yODMgMC00LjA3NCA0LjEzLTcuMzc3IDkuMjIzLTcuMzc3eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNyA3KSIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=='
          onClick={() => {
            popup();
          }}
        />
        <span>팝업 로그인</span>
      </div>
      <div className='kakao-component'>
        <img
          className='kakao-img'
          src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzOCIgaGVpZ2h0PSIzOCIgdmlld0JveD0iMCAwIDM4IDM4Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBjeD0iMTkiIGN5PSIxOSIgcj0iMTkiIGZpbGw9IiNGQUU0MDAiLz4KICAgICAgICA8Zz4KICAgICAgICAgICAgPHBhdGggZD0iTTAgMEgyNFYyNEgweiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNyA3KSIvPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjM0MxRTFFIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0xMS45OTIgMy42OTJjNS4wOTMgMCA5LjIyMiAzLjMwMyA5LjIyMiA3LjM3N3MtNC4xMjkgNy4zNzYtOS4yMjIgNy4zNzZjLS41NTIgMC0xLjA5Mi0uMDM4LTEuNjE2LS4xMTNsLTMuNjQgMi41MTJjLS4xNzIuMTItLjM2OC0uMDIxLS4zNDMtLjE5My4wMTQtLjEwMi4yNy0xLjIwMi43NjUtMy4yOTktMi42MzMtMS4yOTgtNC4zODktMy42MjctNC4zODktNi4yODMgMC00LjA3NCA0LjEzLTcuMzc3IDkuMjIzLTcuMzc3eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNyA3KSIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=='
          onClick={() => {
            redirect();
          }}
        />
        <span>Redirect 로그인</span>
      </div>
    </div>
  );
}
