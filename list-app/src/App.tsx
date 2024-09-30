import { useState , useEffect } from "react";
import List from "./components/List";
import { DataItem } from "./types/DataItem";

function App(){
  const [data, setdata] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() =>{
    const fetchdata = async() =>{
      try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if(!response.ok){
          throw new Error("Network response was not ok")
        }
        const jsonData = await response.json();
        setdata(jsonData.slice(0,10));

      }catch(error){
        setError((error as Error).message)
      }finally{
        setLoading(false)
      }
    }
    fetchdata();
  },[])

  return(
    <div className="App">
      <h1>Data List:</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <List items = {data}/>
    </div>
  )

}

export default App;