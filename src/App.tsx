import './styles/style.css'
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import RegistrationForm from "./layers/auth/Register.page";
import LoginForm from "./layers/auth/LoginForm.page";


function App() {

  return (
      <div>
          <BrowserRouter>
              <Routes>
                  <Route path={'/auth/register'} Component={RegistrationForm}/>
                  <Route path={'/auth/login'} Component={LoginForm}/>
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
