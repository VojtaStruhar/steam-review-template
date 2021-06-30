import './App.css';
import Categories from './Category';
import config_json from './review_templates/config_rdr2.json'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h2 className="App-header">{"---{ Review Template }---"}</h2>
        <p className="App-header">☑ Awesome</p>
      </header>
      
      <div className="categories-container">
        <Categories props={config_json.categories}/>
      </div>

      
      <footer className="App-footer">
        <p className="signature">Vojtěch Struhár, 2021</p>
      </footer>
    </div>
  );
}

export default App;
