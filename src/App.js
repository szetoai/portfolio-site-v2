import './App.css';
import Navbar from './navbar/navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <img className='jeff' src='https://i.ibb.co/kV0rW4YK/jeff.png' alt='jeff' />
      <div className='Intro'>
        <img id='selfie' src='https://i.ibb.co/7xqHrMW9/senior-photo-modified.png' alt='selfie' />
        <h1>Welcome to my website (v2)!</h1>
        <p id='desc'>My last one kept getting flagged for misleading content :/</p>
      </div>
    </div>
  );
}

export default App;
