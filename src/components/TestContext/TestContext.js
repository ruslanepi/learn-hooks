import React from "react";

/*
* Мы можем использовать контекст чтобы прокинуть данные к нужному компоненту. 
* Данный способ облегчает процесс, т.к не требуетися прокидывать 
* данные через каждый компонент, достаточно 1 раз обернуть в контекст 
* верхний компонент и передать значение по умолчанию
*/
const Context = React.createContext();

export default function TestContext() {
    const [context,
        setContext] = React.useState("default context value");

    return (
        <Context.Provider value={[context, setContext]}>
            <ComponentA />
            <ComponentC />
        </Context.Provider>
    );
}

function ComponentA() {
    return (
        <div>
            <ComponentB />
        </div>
    );
}

function ComponentB() {
    const [context,
        setContext] = React.useContext(Context);
    return (
        <div>
            <button onClick={() => setContext("New Value")}>
                Change Context Value
            </button>
            <div>ComponentB: {context}</div>
        </div>
    );
}

function ComponentC() {
  const [context,
      setContext] = React.useContext(Context);
  return (
      <div>
          <div>ComponentC: {context}</div>
      </div>
  );
}