//This is just a blueprint of button.
//We can include mutiple of this button .

import  PropTypes from "prop-types";
const Button = ({onClick}) => {

    return(
    <button onClick={onClick}>Save</button>)
};


export default Button;

