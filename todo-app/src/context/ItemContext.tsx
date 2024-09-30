import React, {createContext, ReactNode, useState} from "react";

export interface Item  {
    id:number;
    text:string;
}

interface ItemContextType {
    items : Item[]
    addItem : ( text : string ) => void;
    deleteItem : ( id : number ) => void;
}

export const ItemContext = createContext<ItemContextType | undefined> (undefined);

interface itemProviderProps{
    children: ReactNode
}

export const ItemProvider : React.FC<itemProviderProps> = ({children}) =>{
    const [items, setItems] = useState<Item[]>([]);

    const addItem = (text:string) =>{
        if (text.trim() != ''){
            const newItem : Item = {
                id: Date.now(),
                text: text
            }
            setItems ( (prevItems) => [...prevItems, newItem] )
        }

    }

    const deleteItem = (id:number) =>{
        setItems( (prevItems) => prevItems.filter((item) => item.id !== id))
    }

    return(
       <ItemContext.Provider value={{ items, addItem, deleteItem}}>
            {children}
       </ItemContext.Provider>
    );
};