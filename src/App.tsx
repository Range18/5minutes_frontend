import './styles/style.css'
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import RegistrationForm from "./layers/auth/Register.page";
import LoginForm from "./layers/auth/LoginForm.page";
import ProjectPage from "./pages/projects/project.page";


function App() {

  return (
      <div>
          <BrowserRouter>
              <Routes>
                  <Route path={'/auth/register'} Component={RegistrationForm}/>
                  <Route path={'/auth/login'} Component={LoginForm}/>
                  <Route path={'/projects/:id'} Component={ProjectPage}/>
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
