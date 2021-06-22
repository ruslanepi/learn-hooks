import React from 'react'

const TestLogin = () => {

    // если мы залогинены: выводить кнопку выйти (разлогиниться)  и контент. Иначе
    // выводить кнопку залогиниться

    const [login,
        setLogin] = React.useState(false)

    const loginHandler = () => {
        setLogin(true)
    }

    const logoutHandler = () => {
        setLogin(false)
    }

    return (
        <div>
          login: {login.toString()}
          <hr></hr>
            {login
                ? (
                    <div>
                        <div onClick={logoutHandler}>Выйти из учетной записи</div>
                        <hr></hr>
                        <div>Держи контент, хозяин контент</div>
                    </div>
                    
                )
                : (
                    <div>
                        <div onClick={loginHandler}>Войти в учетную запись</div>
                        <hr></hr>
                        <div>
                            Контента не будет! Вы не вошли
                        </div>
                    </div>
                )}
        </div>
    )
}

export default TestLogin