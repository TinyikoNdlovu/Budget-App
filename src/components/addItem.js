import React,{useState} from "react"
import "../css/add.css"

function AddItem (props){

    const [amout, setAmount] = useState('')
    const [item, setItem] = useState("");
    const [transactionType, settransactionType] = useState("");

    const add = (()=>{

        props.add(amout, item , transactionType);
    })
    return (
        <div>
            <h1 style={{paddingTop:"5px"}}>Add transactions</h1>
            <input placeholder="Enter item" onChange={(e)=> setItem(e.target.value)} 
            />{" "} 
            <br></br>
            <input placeholder="Enter amount" onChange={(e)=> setAmount(e.target.value)} 
            />{" "} 
            <br></br>

            <select onChange={(e)=> settransactionType(e.target.value)}>
                <option value="Income">Income</option>
                <option value="Expense">Expense</option>
            </select>{" "} 
            <br></br>

            <button id="btn" onClick={add}>add</button>
        </div>
    );
}

export default AddItem;