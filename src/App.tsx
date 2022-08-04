import Login from './Components/Login';
import './Assets/styles/Corrective.css';
import {
  BrowserRouter,
  MemoryRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";



function App() {

  return (
    <>
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </MemoryRouter>

    </>);

}

export default App;
