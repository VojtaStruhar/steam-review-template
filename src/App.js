import logo from './logo.svg';
import './App.css';
import Category from './Category';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 className="App-header">{"---{ Review Template }---"}</h2>
        <p className="App-header">☑ Awesome</p>
      </header>

      <body>
        <Category/>
      </body>

      <footer className="App-footer">
        <p>Vojtěch Struhár, 2021</p>
      </footer>
    </div>
  );
}

export default App;
