import Button from "./componenets/Button"
import logo from "./logo.svg";
import "./App.css";
import Header from "./componenets/Header"
import Footer from "./componenets/Footer"
function App() {
  const name_app="Bada TOdo";
  const title_app="Todo Application";
  return (
    <div className="container">
      <Header title='siddharth'/>
     <h1>
       {name_app}
     </h1>
     <h1>
       {title_app}
     </h1>
     <Footer/>
    </div>
  );
}
export default App;

//class based impl -

