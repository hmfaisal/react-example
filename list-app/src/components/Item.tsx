import React from "react";
import { DataItem } from "../types/DataItem";

function Item({id, title}:DataItem){
    return(
        <li>Item<strong>{id}</strong> : <strong>{title}</strong></li>
    );
}

export default Item;