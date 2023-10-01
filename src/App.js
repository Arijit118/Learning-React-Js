import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
    <>
    <Navbar title="TextUtils" about="About Us"/>
    <div className="container my-3">
      <TextForm headline="Enter your text to analyze"/>
    </div>
    </>
    
  );
}

export default App;
