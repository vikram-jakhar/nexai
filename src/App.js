import './App.css';
import Ai_Powered from './components/Ai_Powered';
import AndMore from './components/AndMore';
import BackToTop from './components/BackTOTop';
import Blockchain from './components/Blockchain';
import Footer from './components/Footer';
import { Header } from './components/Header';
import Loder from './components/Loder';
import NexAI_Token from './components/NexAI_Token';
import Ready_To_Get from './components/Ready_To_Get';
import Unique from './components/Unique';
import What_NexAi from './components/What_NexAi';

function App() {
  return (
    <div className='bg-[#040808]'>
      <Loder/>
      <Header />
      <Ai_Powered />
      <Unique />
      <Blockchain />
      <AndMore />
      <What_NexAi />
      <NexAI_Token />
      <Ready_To_Get />
      <Footer />
      <BackToTop/>
    </div>
  );
}

export default App;
