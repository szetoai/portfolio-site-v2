import './App.css';
import Navbar from './navbar/navbar';
import Projects from './projects/projects';

function App() {
  return (
    <div className="App">
      {/* Navigation Bar */}
      <Navbar />
      <img className='jeff' src='https://i.ibb.co/kV0rW4YK/jeff.png' alt='jeff' />
      {/* The introduction the user sees */}
      <div className='intro'>
        <img id='selfie' src='https://i.ibb.co/7xqHrMW9/senior-photo-modified.png' alt='selfie' />
        <h1>Welcome to my website (v2)!</h1>
        <p id='desc'>My last one kept getting flagged for misleading content :/</p>
      </div>
      {/* Projects Section */}
      <div className='projects'>
        <Projects />
      </div>
    </div>
  );
}

export default App;
