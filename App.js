// import logo from './logo.svg';
// import './App.css';
// let name = "anumoy";
import react,{ useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";

function App() {
  const [mode, setmode] = useState('white')

  

  const toggleMode = () => {
    if (mode === 'white') {
      setmode('black');
      document.body.style.backgroundColor = 'grey';
    
    } else {
      setmode('white');
      document.body.style.backgroundColor='white';
      
    }
  };

  return (
    <>
      <Navbar title="TextManipulator" home="Pavilion" mode={mode} toggleMode={toggleMode}   />
      {/* <Navbar/> */}

      <TextForm title="Put your mail address" mode={mode} />
      {/* <About /> */}
    </>
  );
}

export default App;
  