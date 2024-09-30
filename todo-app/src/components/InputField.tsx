import React, {useState , useContext} from "react";
import { ItemContext } from "../context/ItemContext";

const InputField:React.FC = () =>{
    const [inputValue, setInputValue] = useState<string>('');
    const itemContext = useContext(ItemContext);
    if (!itemContext) {
        throw new Error('InputField must be used within an ItemProvider');
      }
    const { addItem } = itemContext;
    const handleAddClick = () =>{
        addItem(inputValue);
        setInputValue('');
    }
    return(
        <div>
            <input 
                type = "text"
                value = {inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter a task"
            />  
            <button onClick={handleAddClick}> Add </button>
        </div>
    );
}

export default InputField