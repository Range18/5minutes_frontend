import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import RegistrationForm from "./layers/auth/Register.page";
import LoginForm from "./layers/auth/LoginForm.page";
import ProjectPage from "./pages/projects/project.page";
import AllTasksPage from "./pages/projects/all-tasks.page";
import ProjectsListPage from "./pages/projects/projects-list.page";


function App() {

  return (
          <BrowserRouter>
              <Routes>
                  <Route path={'/auth/register'} Component={RegistrationForm}/>
                  <Route path={'/auth/login'} Component={LoginForm}/>
                  <Route path={'/projects/:id'} Component={ProjectPage}/>
                  <Route path={'/tasks'} Component={AllTasksPage}/>
                  <Route path={'/projects/my'} Component={ProjectsListPage}/>
              </Routes>
          </BrowserRouter>
  );
}

export default App;
