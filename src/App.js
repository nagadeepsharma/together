import { Container } from 'semantic-ui-react';
import './App.css';
import Navbar from './components/Navbar';
import {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './components/Home';
import Footer from './components/Footer';
import Campaigncreate from './components/Campaigncreate';
import Campaigndetail from './components/Campaigndetail'
import Campaignshow from './components/Campaignshow';
import { BrowserRouter, Route } from 'react-router-dom';
import Campaigncreaterequest from './components/Campaigncreaterequest';
import Campaignrequest from './components/Campaignrequest';
import Errorc from './components/Errorc'
function App() {
  useEffect(()=>{
    AOS.init()
  },[])
  return (
    <>
    <Container>
    <BrowserRouter>  
    <div className="App">
      <Navbar />
      <Route path="/campaignshow" exact component={Campaignshow} />
      <Route path="/campaigncreate" component={Campaigncreate} />
      <Route path="/campaignshow/:address" exact component={Campaigndetail} />
      <Route path="/" exact component={Home} />
      <Route path="/campaigncreaterequest/:createaddress" component={Campaigncreaterequest} />
      <Route path="/campaignrequest/:campaignaddress" component={Campaignrequest} />
      <Route component={Errorc} />
    </div>
    </BrowserRouter>
    </Container>
    <Footer />
    
    </>
  );
}
console.log = console.warn = console.error = () => {};

export default App;
