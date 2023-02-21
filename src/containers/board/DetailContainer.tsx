import Detail from "../../components/board/Detail";

export default function DetailContainer(props: any) {
  const { boardSno } = props;
  return <Detail boardSno={boardSno} />;
}
