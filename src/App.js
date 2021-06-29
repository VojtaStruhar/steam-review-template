import './App.css';
import Category from './Category';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 className="App-header">{"---{ Review Template }---"}</h2>
        <p className="App-header">☑ Awesome</p>
      </header>

      <div>
        <Category/>
      </div>

      <footer className="App-footer">
        <p>Vojtěch Struhár, 2021</p>
      </footer>
    </div>
  );
}

export default App;
