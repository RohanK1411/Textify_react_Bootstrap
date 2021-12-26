import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
    <Navbar title = "Textify" pageLink= "About"/>
    <div className="container my-3">
    <TextForm header="Enter Text To Analyze"/>
    </div>
    </>
  );
}

export default App;
