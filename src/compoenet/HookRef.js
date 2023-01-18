import { useRef, useState } from "react";

const HookRef = () => {
    //사용자 입력값 data, 화면에 출력값 result
    const [form, setForm] = useState({data: '', result: ''})
    //인풋
    const handleChange = (e) => {
        setForm( {...form, ["data"]: e.target.value} ); //데이터를 가져오는데 기존것만 변경하겠다.
    }
    //등록
    const handleClick = () => {

        setForm( {data: '', result: form.data} );
        //Ref의 사용
        //console.log(inputTag);
        //console.log(inputTag.current.value);

        inputTag.current.focus();
    }

    //특정 태그에 이름달기 useRef()
    //반환된 이름을 사용할 태그에 ref속성에 넣습니다.
    //어쩔수없이 태그를 직접 핸들링해야할때 사용하는것을 권유(state로 관리하는것이 제일 좋음)
    const inputTag = useRef();
      

    return (
        <>
            내용: <input type="text" onChange={handleChange} value={form.data} ref={inputTag}/>
            <button onClick={handleClick}>등록하기</button>
            <br/>
            결과: {form.result}
        </>
    )
}

export default HookRef;