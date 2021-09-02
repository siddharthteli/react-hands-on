//This can contain class or just a function.
import Button  from "./Button";
const Header = (title) => { 
    const Click=()=> { 
        console.log("Hello");
    }
    return(
    <header>
        <h1>This is our header {title.title}.</h1>
        <Button onAdd={Click}/>
    </header>

    )
       
};

export default Header