
import './App.css';
import gobe from './images/gobe.jpg';
import gobe1 from './images/gobe1.jpeg';

function App() {
  return (
    <div className="App"> 
    <h1>GARI AND BEANS</h1>
    <p>
    Gob3 is a Ghanaian food made of Gari and beans, and therefore the name gob3 is a combination on Gari and beans.
    </p>

        <img src={gobe} className="gobe" alt="" />
        <img src={gobe1} className="gobe1" alt="" />  
    </div>
  );
}

export default App;
