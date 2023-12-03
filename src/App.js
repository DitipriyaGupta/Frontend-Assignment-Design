import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import AuthForm from './components/Navbar';
import SlideShow from './components/Navbar';
import FAQs from './components/FAQs';
import Testimonials from './components/Testimonials';

function App() {
  return (
   <div className='bg-[#fef9f6]'>
<Navbar/>
<Hero/>
<Features/>
<Testimonials/>
<FAQs/>
   </div>
  );
}

export default App;
