import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import AuthForm from './components/Navbar';
import SlideShow from './components/Navbar';

function App() {
  return (
   <div className='bg-white'>
<Navbar/>
<Hero/>
<Features/>
   </div>
  );
}

export default App;
