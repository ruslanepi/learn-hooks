import React from 'react'

const Counter = () => {

    const [counter,
        setCounter] = React.useState(0)

    const [fruit,
        setFruit] = React.useState("apple")

    React.useEffect(() => {
        document.title = `Вы нажали на кнопку ${counter} раз`
    }, [counter])


    
    return (
        <div>
            <h1>{counter}</h1>

            <button onClick={() => setCounter(counter + 1)}>
                Увеличить счетчик
            </button>
            <hr></hr>

            <h2>{fruit}</h2>
            <button onClick={() => setFruit("mango")}>
                Увеличить изменить фрукт
            </button>
        </div>

    )
}

export default Counter