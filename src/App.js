import Map from "./map";
import Legend from "./legend";

function App() {
  return (
    <div className="App">
      <h1>High Park Locations</h1>
      <p>Check out these awesome locations when visiting High Park!</p>
      <div className="main-section">
        <Map></Map>
        <Legend></Legend>
      </div>
    </div>
  );
}

export default App;
