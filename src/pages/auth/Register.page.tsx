import React, {useState} from 'react';
import '../../styles/style.css'
import {registerUser} from "../../services/auth.service";

function RegistrationForm() {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    return (
        <div className="container p-md-5 col-md-6">
        <h2 className="text-center mt-2">Регистрация</h2>
            <input type="text" className="form-control p-3 mt-3 input_text" placeholder="Имя" aria-label="Username"
    aria-describedby="basic-addon1" onChange={text => setUsername(text.target.value)}/>
    <input type="text" className="form-control p-3 mt-2 input_text" placeholder="Почта" aria-label="Username"
    aria-describedby="basic-addon1" onChange={text => setEmail(text.target.value)}/>
    <input type="text" className="form-control p-3 mt-2 input_text" placeholder="Пароль" aria-label="Username"
    aria-describedby="basic-addon1" onChange={text => setPassword( text.target.value)}/>
    <button className="btn btn-primary text-center mt-3 pe-5 ps-5 p-3 my_btn" type="submit" onClick={async () => {await registerUser(email, username, password)} }>Зарегестрироваться
    </button>
    <p className="text-center mt-2">Уже есть аккаунт?<a href="/auth/login" className="link_ac">Вход</a></p>
    </div>
);
}

export default RegistrationForm;