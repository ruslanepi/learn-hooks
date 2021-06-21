import React from "react";


/*
* Чтобы исключить лишние вычисления, при ререндере компонента
* (допустим если у нас не изменилась часть значений) мы можем
* эти вычисления мемоизировать добавив хук usememo.
*/

const sum = n => {
    console.log("rerender");
    return n + n
};

const TestMemo = () => {
    const [num,
        setNum] = React.useState(1);
    const [isGreen,
        setIsGreen] = React.useState(true);
    const result = React.useMemo(() => sum(num), [num]);

    return (
        <div>
            <h1
                onClick={() => setIsGreen(!isGreen)}
                style={{
                color: isGreen
                    ? "green"
                    : "red"
            }}>
                Example
            </h1>
            <h2>
                Sum {result}
            </h2>
            <button onClick={() => setNum(num + 1)}>➕</button>
        </div>
    );
};
export default TestMemo;

