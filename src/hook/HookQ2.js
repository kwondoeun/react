import { useEffect, useRef, useState } from "react";


const HookQ2 = () => {

    /*
    실습(할일 목록 만들기)
    1. state는 {todo: '', list: [] }로 관리하세요.
    2. 할일 목록을 작성하고 클릭시, list에 인풋에 입력값을 추가하고 map을 통해서 화면을 그립니다.
    3. 등록버튼 클릭 이후에는 ref를 활용해서 input태그에 포커싱을 줍니다.
     */

    const inputTag = useRef();
    useEffect(() => {
        inputTag.current.focus();
    }, []);

    const [list, setList] = useState({ todo: '', list: [] })
    //index를 써주면 알아서 index가 생성됨.
    //map이 반복이니 list.list에 여러가지 데이터가 있을때 첫번째 줄, 두번째줄 나눌수 있음.
    const newList = list.list.map((item , index) =>
        <li key={index}>{item}</li> //위에서 item으로 받았으니 내가 input에 입력해서 list로 가지고있는 애들을 한줄씩 item으로 뽑아줌. key를 꼭 넣어줘야함(콘솔에러)!
        )

    const handleChange = (e) => {
        setList({...list , ["todo"]:e.target.value}); //input태그에 입력한 값(value)을 그대로 복사
        inputTag.current.focus();
    }

    const handleClick = () => {
        let newList = list.list; //newList에 지금들고 있는 list를 복사
        newList.push(list.todo); //list에 입력한값을 넣어줌
        setList({todo: '', list: newList}); //입력하고나면 input창이 공백이 되게, 내가 새로 만든 newList를 list에 덮어써준다.
        inputTag.current.focus();
    }

    return (
        <div>
            <h3>ref로 할일 목록 만들기</h3>
            <input type="text" onChange={handleChange} name="todo" placeholder="할일목록" ref={inputTag} value={list.todo}/>
            <button onClick={handleClick}>등록하기</button>
            <ul>
                {newList}
            </ul>
        </div>
    )
}

export default HookQ2;