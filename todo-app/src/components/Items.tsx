import React, {useContext} from "react";
import { ItemContext } from "../context/ItemContext";
import ItemComponent from "./Item";

const Items:React.FC = () =>{
    const itemContext = useContext(ItemContext);
    if (!itemContext) {
        throw new Error('ItemList must be used within an ItemProvider');
    }
    const { items, deleteItem } = itemContext;

    return(
        <ul>
            {items.map((item) => (
                <ItemComponent key={item.id} item={item} onDeleteItem={deleteItem} />
            ))}
        </ul>
    );
}

export default Items