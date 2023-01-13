import { Fragment } from "react";
import MyComponent3 from "./compoenet/MuComponent3";
import MyComponent from "./compoenet/MyComponent";
import MyComponent2 from "./compoenet/MyComponent2";

const App = () => {

    return (
        <Fragment>
            <h3>나의 App.JS</h3>
            {/* props */}
            <MyComponent name={"홍길동"} age={20} />
            <MyComponent2/>
            <MyComponent3/>
        </Fragment>
    )
}


export default App; //내보내기