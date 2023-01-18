import userEvent from "@testing-library/user-event";
import { useEffect, useRef, useState } from "react"


const HookQ = () => {

    /*
    1. 컴포넌트가 마운트된 이후 한번만 id태그에 포커스를 줍니다.

    2. id, pw는 state로 관리합니다.
    로그인버튼 클릭시 공백이라면 공백인 태그에 포커스를 주세요.
    로그인버튼 클릭시 공백이 아니라면 경고창으로 id와 pw를 출력해주세요.
    */

    //id와 pw는 state로 관리하라고 했기 때문에 useState사용
    const [form, setForm] = useState({id: '', pw: ''})
    //useRef는 같은 이름으로 되지 않는다고 함. 그래도 id와 pw의 ref를 두개로 만들어줌.
    const inputTag = useRef();
    const inputTag2 = useRef();
    
    useEffect(() => {
        inputTag.current.focus();
    }, []);

    const handlChange = (e) => {
        setForm( {...form, [e.target.name]: e.target.value} );
        
    }

    const handleClick = () => {
        if(form.id === "") {
            //아이디가 공백이면 아이디에 포커스를 주게한다.    
            inputTag.current.focus();
        } else if(form.pw === "") {
            //비밀번호가 공백이면 비밀번호에 포커스를 주게한다.
            inputTag2.current.focus();
        } else {
            //아이디와 비밀번호가 정상적으로 입력이됐다면 경고창으로 아이디와 비밀번호를 출력해준다.
            alert(`아이디:${form.id} 비밀번호:${form.pw}`);
        }
        
    }


    return (
        <div>
            <h3>훅실습</h3>
            <input type="text" onChange={handlChange} name="id" placeholder="아이디" ref={inputTag}/>
            <input type="password" onChange={handlChange} name="pw" placeholder="비밀번호" ref={inputTag2}/>
            <button onClick={handleClick}>로그인</button>
        </div>
    )

}

export default HookQ;