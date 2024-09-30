import { DataItem } from "../types/DataItem";
import Item from "./Item";

interface Listprops{
    items:DataItem[];
}

function List({items}:Listprops){
    return(
        <ul>
            {items.map((item)=>(
                <Item key={item.id} id={item.id} title = {item.title}/>
            ))}
        </ul>
    )
}

export default List