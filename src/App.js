import './App.css';
import Counter from './components/Counter/Counter'
import CounterButtons from './components/Buttons/Buttons'
import TestContext from "./components/TestContext/TestContext";
import TestMemo from './components/TestMemo/TestMemo'
import TestRef from './components/TestRef/TestRef'


function App() {
    return (
        <div className="App">
            <header className="App-header">

                <Counter/>
                <br></br>
                <CounterButtons initialCount={1}/>
                <br></br>
                <TestContext/>
                <br></br>
                <TestMemo/>
                <br></br>
                <TestRef/>
               
            </header>
        </div>
    );
}

export default App;
