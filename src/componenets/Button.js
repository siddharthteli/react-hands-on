//This is just a blueprint of button.
//We can include mutiple of this button .

import  PropTypes from "prop-types";
const Button = ({onAdd}) => {

    return(
    <button onClick={onAdd}>Save</button>)
};


export default Button;

