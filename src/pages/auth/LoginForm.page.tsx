import React, {useState} from 'react';
import '../../styles/style.css'
import {login} from "../../http/auth/auth.requests";
import {loginUser} from "../../services/auth.service";

function LoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    return (
            <div className="container p-md-5 col-md-6">
                <h2 className="text-center mt-2">Вход</h2>
                <input type="text" className="form-control p-3 mt-3 input_text" placeholder="Почта"
                       aria-label="Username" aria-describedby="basic-addon1" onChange={text => setEmail(text.target.value)}/>
                <input type="text" className="form-control p-3 mt-2 input_text" placeholder="Пароль"
                       aria-label="Username" aria-describedby="basic-addon1" onChange={text => setPassword(text.target.value)}/>
                <button className="btn btn-primary text-center mt-3 pe-5 ps-5 p-3 my_btn"
                        type="submit" onClick={async () => {await loginUser(email, password)} }>Войти
                </button>
                <p className="text-center mt-2">Еще нет аккаунта?<a href="/auth/register"
                                                                    className="link_ac">Регистрация</a></p>
            </div>
    );
}

export default LoginForm;