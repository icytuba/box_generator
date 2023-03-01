import React, {useState} from "react";

const Form = ({boxes, setBoxes}) => {
    
    const [color, setColor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setBoxes([...boxes, color]);
        setColor("");
        console.log(JSON.stringify(boxes));
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>Color: </label>
            <input type="text" name="color" value={color} onChange={ (e) => setColor(e.target.value) } />
            <input type="submit" value="Add" />
        </form>
    );
}
export default Form;