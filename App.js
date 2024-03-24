import './App.css';
import Carousel from './src/component/Carousel.js';
import Navbar from './src/component/Navbar.js';



function App() {
  return (
    <div className='app-container'>
      <Navbar></Navbar>
      <Carousel></Carousel>
    </div>
  );
}

export default App;
