/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

interface Box {
  index: number;
  click: boolean;
  result: boolean;
}

export default function BombGame() {
  const [arr, setArr] = useState<Box[]>([]);
  const [count, setCount] = useState<number>(5);
  const [rowCol, setRowCol] = useState<number>(5);
  const [clickCnt, setClickCnt] = useState<number>(0);
  const [isEnd, setisEnd] = useState<boolean>(false);
  const [clickList, setClickList] = useState<Box[]>([]);
  const [bombCnt, setBombCnt] = useState<number>(0);

  useEffect(() => {
    arrMap();
  }, [rowCol]);

  const arrMap = (): void => {
    const newArr: Box[] = [];
    let cnt: number = 0;
    for (let i: number = 1; i < rowCol * rowCol + 1; i++) {
      const random: number = Math.round((Math.random() * (4 - 1) + 1) * 1) / 1;
      let bomb: boolean = false;

      if (random == 1 && cnt < (rowCol * rowCol) / rowCol) {
        bomb = true;
        cnt++;
      }

      newArr.push({
        index: i,
        click: false,
        result: bomb,
      });
    }
    setBombCnt(cnt);
    setArr(newArr);
  };

  const buttonClick = (id: string, box: Box): void => {
    if (clickList.length > 0) {
      const dupli = clickList.filter((prev) => prev.index == box.index);
      if (dupli.length > 0) {
      } else {
        if (clickCnt < rowCol && !isEnd) {
          setClickList((prev) => [...prev, box]);
          setClickCnt(clickCnt + 1);
          buttonOpen(id, box);
          if (clickCnt + 1 == rowCol) headReset();
        } else {
          alert("끝났는데용");
        }
      }
    } else {
      setClickList((prev) => [...prev, box]);
      setClickCnt(clickCnt + 1);
      buttonOpen(id, box);
    }
  };

  const buttonOpen = (id: string, box: Box): void => {
    let ele: HTMLElement | null = document.getElementById(id);
    if (ele && !box.click && box.result) {
      box.click = true;
      ele.style.backgroundColor = "#ff0000";
    } else if (ele && !box.click && !box.result) {
      ele.style.backgroundColor = "#E5FFCC";
    }
  };

  const plusCount = (): void => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const minusCount = (): void => {
    if (count > 3) {
      setCount(count - 1);
    }
  };

  const rowColChange = (): void => {
    if (isEnd) {
      for (let i = 1; i < rowCol * rowCol + 1; i++) {
        let ele: HTMLElement | null = document.getElementById(String(i));
        ele.style.backgroundColor = "rgba(0, 0, 0, 0, 0)";
      }
      setClickCnt(0);
      setRowCol(count);

      alert("재 시작합니다!");
      headReset();
    } else {
      alert(
        "게임 종료 후 판 변경 해주세요!                                                 전체확인을 누르시면 게임이 종료 됩니다 :)"
      );
    }
  };

  const allOpen = (): void => {
    arr.map((prev) => {
      buttonOpen(String(prev.index), prev);
    });
    setClickCnt(rowCol);
    if (clickCnt < rowCol) {
      headReset();
    } else {
      setisEnd(true);
    }
  };

  const headReset = (): void => {
    let ele: HTMLElement | null = document.getElementById("head");
    if (isEnd) {
      ele.innerText = "펑펑 !!!! 지뢰피하기 !!!! 펑펑";
      ele.style.fontSize = "50px";
    } else {
      ele.innerText = "펑펑 !!!! 끝 !!!! 펑펑";
      ele.style.fontSize = "100px";
    }
    setisEnd(!isEnd);
  };

  return (
    <div>
      <div>
        <div>
          <div className="bomb-title" id="head">
            펑펑 !!!! 지뢰 피하기 !!!! 펑펑
          </div>
        </div>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "50px" }}
      >
        <div
          className="bomb-gamepan"
          style={
            rowCol == 3
              ? {
                  gridTemplateColumns: "150px 150px 150px",
                  gridTemplateRows: "150px 150px 150px",
                }
              : rowCol == 4
              ? {
                  gridTemplateColumns: "130px 130px 130px 130px",
                  gridTemplateRows: "130px 130px 130px 130px",
                }
              : rowCol == 5
              ? {
                  gridTemplateColumns: "100px 100px 100px 100px 100px",
                  gridTemplateRows: "100px 100px 100px 100px 100px",
                }
              : rowCol == 6
              ? {
                  gridTemplateColumns: "85px 85px 85px 85px 85px 85px",
                  gridTemplateRows: "85px 85px 85px 85px 85px 85px",
                }
              : rowCol == 7
              ? {
                  gridTemplateColumns: "75px 75px 75px 75px 75px 75px 75px",
                  gridTemplateRows: "75px 75px 75px 75px 75px 75px 75px",
                }
              : rowCol == 8
              ? {
                  gridTemplateColumns:
                    "65px 65px 65px 65px 65px 65px 65px 65px",
                  gridTemplateRows: "65px 65px 65px 65px 65px 65px 65px 65px",
                }
              : rowCol == 9
              ? {
                  gridTemplateColumns:
                    "55px 55px 55px 55px 55px 55px 55px 55px 55px",
                  gridTemplateRows:
                    "55px 55px 55px 55px 55px 55px 55px 55px 55px",
                }
              : {
                  gridTemplateColumns:
                    "48px 48px 48px 48px 48px 48px 48px 48px 48px 48px",
                  gridTemplateRows:
                    "48px 48px 48px 48px 48px 48px 48px 48px 48px 48px",
                }
          }
        >
          {arr.length > 0 ? (
            arr.map((prev) => {
              return (
                <>
                  <div
                    key={prev.index + `, ${rowCol}`}
                    id={String(prev.index)}
                    className="bomb-gamecan"
                    onClick={(e) => {
                      buttonClick(e.currentTarget.id, prev);
                    }}
                  >
                    {prev.index}
                  </div>
                </>
              );
            })
          ) : (
            <></>
          )}
        </div>

        <div className="bomb-rightAll">
          <div>
            <div className="bomb-remainClick">
              남은 클릭수 : {rowCol - clickCnt}
            </div>
            <div className="bomb-remainClick" style={{ marginBottom: "50px" }}>
              남은 지뢰수 : {bombCnt}
            </div>
            <div className="bomb-changeGame">
              <div
                className="bomb-plusMinus"
                onClick={() => {
                  minusCount();
                }}
              >
                -
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "30px",
                }}
              >
                {count}
              </div>
              <div
                className="bomb-plusMinus"
                onClick={() => {
                  plusCount();
                }}
              >
                +
              </div>
            </div>

            <div
              className="bomb-button"
              onClick={() => {
                rowColChange();
              }}
            >
              판 변경
            </div>
            <div
              className="bomb-button"
              onClick={() => {
                allOpen();
              }}
            >
              전체확인
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
