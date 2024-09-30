import React from "react";
import { Item } from "../context/ItemContext";

interface ItemProps{
    item: Item;
    onDeleteItem: (id: number) => void;
}

const ItemComponent:React.FC<ItemProps> = ( {item, onDeleteItem}) =>{
    return(
        <li >
            {item.text}
            <button onClick={() => onDeleteItem(item.id)} >
                Delete
            </button>
        </li>
    );
}

export default ItemComponent