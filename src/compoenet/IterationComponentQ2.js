import { useState } from "react";


const IterationComponentQ2 = () => {
    //1 - select태그는 컴포넌트 반복으로 option태그를 생성합니다.
    const select = ['HTML', 'Javascript', 'CSS', 'Java', 'Oracle', 'Mysql'];

    //2 - data는 state로 관리하고 화면에 li태그로 반복을 합니다.
    const data = [
        { id: 1, type: 'Java', teacher: '이순신' },
        { id: 2, type: 'Java', teacher: '홍길자' },
        { id: 3, type: 'Javascript', teacher: '홍길동' },
        { id: 4, type: 'Oracle', teacher: '이순신' },
        { id: 5, type: 'Mysql', teacher: '이순신' },
        { id: 6, type: 'CSS', teacher: '박찬호' },
        { id: 7, type: 'HTML', teacher: 'coding404' },
    ];

    const newArr = select.map(item =>
        <option key={item}>{item}</option> //key에 받은 값(item)을 넣어줘야 한다.
    )

    //3. 셀렉트박스가 체인지되면, 이벤트 객체를 활용해서 선택된 값만 필터링해서 보여주면 됩니다.
    //state로 arr을 관리
    const [list, setList] = useState(data);
    const newList = list.map(item =>
        <li key={item.id} >
            {item.type}-{item.teacher}
        </li>
    )
    const handleChange = (e) => {
        //console.log(e.target.value);
        //내가 선택한것만 추가해서 보여질수 있게 filter를 사용한다.
        const newList = data.filter(item => item.type === e.target.value)
        setList(newList);
        //console.log(newList);
    }

    //4. 숙제 검색 기능 추가
    //input창 이벤트 처리
    const [search, setSearch] = useState('');
    const searchange = (e) => {
        setSearch(e.target.value);
    }

    //검색 버튼 이벤트 처리
    const searchClick = () => {
        const searchList = data.filter(item => item.type.toUpperCase().indexOf(search.toUpperCase()) != -1 || item.teacher.toUpperCase().indexOf(search.toUpperCase()) != -1)
        setList(searchList);
    }


    return (
        <>
            <h3>실습</h3>
            <h3>검색기능- 대소문자를 구분하지 않고 teacher, type에 포함된 데이터만 필터링</h3>
            Search: <input type="text" onChange={searchange}/>
            <button onClick={searchClick}>검색</button>
            <br/>
            과목찾기:
            <select onChange={handleChange}>
                {newArr}
            </select>
            <ul>
                {newList} {/* 현재 값을 보여주어야 하니 state로 관리하는곳에 첫번재로 넣어준 list값 넣어준다. */}
            </ul>
        </>
    )
}

export default IterationComponentQ2;