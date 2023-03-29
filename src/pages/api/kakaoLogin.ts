import { NextApiRequest, NextApiResponse } from 'next';
import { KAKAO_REDIRECT_URL, KAKAO_RESTAPI_KEY } from '../../configs/constants';
import Axios from '../../modules/utils/customAxiosUtil';

interface TokenResponse {
  token_type: string;
  access_token: string;
  refresh_token: string;
  id_token: string;
  expires_in: number;
  refresh_token_expires_in: string;
  scope: string;
}

interface UserInfo {
  id: number;
  connected_at: string;
  properties: {
    nickname: string;
    profile_image?: string; // 640x640
    thumbnail_image?: string; // 110x110
  };
}

const getTokenFromKakao = async (authCode: string): Promise<TokenResponse> => {
  const tokenUrl = `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${KAKAO_RESTAPI_KEY}&redirect_uri=${KAKAO_REDIRECT_URL}&code=${authCode}`;
  const res = await Axios.post(tokenUrl);
  return res.data;
};

const getUserFromKakao = async (
  tokenResponse: TokenResponse
): Promise<UserInfo> => {
  const userInfoUrl = 'https://kapi.kakao.com/v2/user/me';
  const res = await Axios.get(userInfoUrl, {
    headers: {
      Authorization: `Bearer ${tokenResponse.access_token}`
    }
  });
  return res.data;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  // 인가 코드
  const authCode = req.query.code as string;

  // 토큰 정보
  const tokenResponse = await getTokenFromKakao(authCode);

  const userInfo = await getUserFromKakao(tokenResponse);

  res.status(200).send(userInfo);
}
