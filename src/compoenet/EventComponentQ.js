import { useState } from "react"


const EventComponentQ = () => {

    const [food, setFood] = useState('메뉴를 선택하세요');

    //셀렉트 태그에서는 option태그가 기본 value가 됩니다.
    const handleChange = (e) => {
        setFood(e.target.value);

    }

    return (
        <>
            <hr />
            <h3>셀렉트 태그 핸들링(실습)</h3>
            <h4>셀렉트 태그가 체인지 될때 선택한 결과</h4>
            <select onChange={handleChange}>
                <option>선택</option>
                <option>치킨</option>
                <option>바닐라</option>
                <option>피자</option>
            </select>

            <h3>선택한 결과</h3>
            <h4>결과: {food}</h4>
        </>

    )

}

export default EventComponentQ;