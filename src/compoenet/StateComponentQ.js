import { useState } from "react"

let count = 0;
const StateComponentQ = () => {

    /* data, setData는 내가 지정한 이름, useState는 메서드 */
    let [data, setData] = useState(count);
    let up = () => setData(++count);
    let down = () => setData(--count);
    let reset = () => setData(0);

    return (
        <>
            <hr />
            <h3>실습</h3>
            <h3>카운트:{data}</h3>
            <button onClick={up}>증가</button>
            <button onClick={down}>감소</button>
            <button onClick={reset}>초기화</button>

        </>
    )


}

export default StateComponentQ;