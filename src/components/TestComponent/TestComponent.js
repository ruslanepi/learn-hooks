import React from 'react'

const TestComponent = () => {

    const [flag,
        setFlag] = React.useState(true)

    const doAction = (e) => {
        e.preventDefault()
        setFlag(!flag)
        
    }

    return (
        <div>
          <h1>{flag ? 'flag in true' : 'flag in false'}</h1>
            <a onClick={doAction}>
                Click 
            </a>
        </div>

    )
}

export default TestComponent