import logo from "./logo.svg";
import "./App.css";
import Header from "./componenets/Header"
function App() {
  const name_app="Bada TOdo";
  const title_app="Todo Application";
  return (
    <div className="container">
      <Header/>
     <h1>
       {name_app}
     </h1>
     <h1>
       {title_app}
     </h1>
    </div>
  );
}

export default App;
