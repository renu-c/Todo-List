import './App.css';

import {useState} from "react";
import List from './List';

function App() {

const [currentItem, setCurrentItem]= useState(null);
const [itemList, updateItemList]= useState([]);

const onChangeHandler = e => {

  console.log("current values", e.target.value);
  setCurrentItem(e.target.value);

};
 
const addItemToList =() =>{
  updateItemList([...itemList,{item:currentItem, key:Date.now()}]);
  // console.log("list Item,itemList");
  setCurrentItem("");
};
console.log(itemList);
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="heading">ToDo List</h1>
       <div className="wrapper">         
          <div className="Input-wrapper">
            <input placeholder="add item here" value={currentItem} onChange={onChangeHandler}/>
            <button onClick={addItemToList}>+</button>
          </div>
          <List itemList={itemList} updateItemList={updateItemList}/>
         </div> 
      </header>
    </div>
  );
}

export default App;
