import './App.css';
import Category from './Category';
import config_json from './review_templates/config_rdr2.json'

function App() {

  console.log("eej", config_json.name)

  return (
    <div className="App">
      <header className="App-header">
        <h2 className="App-header">{"---{ Review Template }---"}</h2>
        <p className="App-header">☑ Awesome</p>
      </header>

      <div>
        <Category/>
      </div>
      <p> xd </p>
      <footer className="App-footer">
        <p>Vojtěch Struhár, 2021</p>
      </footer>
    </div>
  );
}

export default App;
