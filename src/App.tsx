import PopupApp from './Components/PopupExt';
import MainApp from './Components/Mainpage';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";


function App() {


  return (<>
    {/* <PopupApp /> */}
    <BrowserRouter>
      <Routes>
        <Route path="/mainapp" element={<MainApp />} />
        <Route path="/" element={<PopupApp />} />
      </Routes>
    </BrowserRouter>
  </>
  );

}

export default App;
