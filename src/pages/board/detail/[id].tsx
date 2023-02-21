/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";
import DetailContainer from "../../../containers/board/DetailContainer";

export default function detail() {
  const router = useRouter();
  const id = router?.query.id;
  return <DetailContainer boardSno={id} />;
}
