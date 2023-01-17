import { Fragment } from "react"
import IterationComponent2 from "./compoenet/IterationComponent2";
import IterationComponentQ from "./compoenet/IterationComponentQ";
import IterationComponentQ2 from "./compoenet/IterationComponentQ2";
import IterationComponent from "./compoenet/ItertationComponent";


const App = () => {

    /*
    p. 180
    컴포넌트 반복하기
    map(콜백(item, index, arr))
     */

    return (
        <Fragment>
            <IterationComponent/>
            <hr/>
            <IterationComponent2/>

            {/* 실습 */}
            <hr/>
            <IterationComponentQ/>
            <hr/>
            <IterationComponentQ2/>
        </Fragment>
    )
}

export default App;