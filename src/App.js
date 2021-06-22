import './App.css';
import Counter from './components/Counter/Counter'
import CounterButtons from './components/Buttons/Buttons'
import TestContext from "./components/TestContext/TestContext";
import TestMemo from './components/TestMemo/TestMemo'
import TestRef from './components/TestRef/TestRef'
import TestComponent from './components/TestComponent/TestComponent'
import TestLogin from './components/TestLogin/TestLogin';

function App() {
    return (
        <div className="App">
            <header className="App-header">

                <TestLogin/> {/* <TestComponent /> */}

                {/* <Counter/>
                <br></br>
                <CounterButtons initialCount={1}/>
                <br></br>
                <TestContext/>
                <br></br>
                <TestMemo/>
                <br></br>
                <TestRef/> */}

            </header>
        </div>
    );
}

export default App;
