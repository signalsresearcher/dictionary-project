import logo from './5119872_book_dictionary_literature_icon.png';
import './App.css';
import Dictionary from './Dictionary';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <Dictionary defaultKeyword="rainbow" />
      </main>
    </div>
    <footer className="text-center">Coded by Larissa, hosted on <a href="https://netlify.com">Netlify</a>  and Open Sourced on <a href="https://github.com">GitHub</a> </footer>
    </div>
  );
}

