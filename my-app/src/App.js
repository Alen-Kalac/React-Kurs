import "./App.css";
import CardPage from "./CardPage/CardPage";
// import InputCpt from "./components/InputCpt/InputCpt";




function App() {
  return (
    <div className="App">
     <div className="top">
      <h1>Watch Together!</h1>
      <input type="text" placeholder="Search"></input>
     </div>
     <CardPage />
    </div>
  );
}

export default App;
