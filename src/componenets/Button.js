//This is just a blueprint of button.
//We can include mutiple of this button .
import { useState } from "react";
import  PropTypes from "prop-types";
const Button = ({onAdd}) => {
    const [message,Po]=useState(40);

    return(
    <button onClick={() =>Po(message+5)}>{message}</button>)
};


export default Button;

