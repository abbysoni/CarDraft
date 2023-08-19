import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import OrdDetail from './Components/OrdDetail';
import InvDetail from './Components/invDetail';
import JobCard from './Components/jobCard';
import Invoice from './Components/invoice';

function App() {
  return (
    <>
   <Header/>
   <OrdDetail packId="Service Package" ordId="54"/>
   <InvDetail packId="Service Package"/>
   <JobCard packId="Service Package"/>
   <Invoice packId="Service Package"/>
   </>
  );
}

export default App;
{/* <div className="App">
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</header>
</div> */}