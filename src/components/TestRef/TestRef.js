import React from "react"

/*
* useRef не приводит к повторному рендеру. Не злоупотрелять
*
*/

function TestRef() {
  const ref = React.useRef(null)

  const focus = () => {
    ref.current.focus()
  }

  return (
    <>
      <input ref={ref} />
      <button onClick={focus}>Focus</button>
    </>
  )
}


export default TestRef