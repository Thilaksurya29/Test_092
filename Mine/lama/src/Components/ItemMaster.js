import React from "react"
import './ItemMaster.css'
import {addItem} from './api.js'
import {useState} from 'react';



const ItemMaster = () => {

    console.log("Booom");
  
const[itemid, setItemid] = useState("");
const[description, setDescription] = useState(""); 
const[issueStatus,setIssueStatus] = useState("");
const[itemMake, setItemMake] = useState("");
const[itemCategory, setItemCategory] = useState("");
const[itemValuation, setItemValuation] = useState("");


 const onItemidChange=(e)=>{
    setItemid(e.target.value);
 }
 const onDescriptionChange=(e)=>{
    setDescription(e.target.value);
 }
 const onIssueStatusChange=(e)=>{
    setIssueStatus(e.target.value);
 }
 const onItemMakeChange=(e)=>{
    setItemMake(e.target.value);
 }
 const onItemCategoryChange=(e)=>{
    setItemCategory(e.target.value);
 }
 const onItemValuationChange=(e)=>{
    setItemValuation(e.target.value);
 }


  const handleItem = async (e) => {
    e.preventDefault();
    const item = {
        itemid, description, issueStatus, itemMake, itemCategory, itemValuation
    }; 
    console.log(item);
    await addItem(item)
   
  }

  return (
  <div className="container">
      <div class="login-form">
        <h3>ITEM MASTER</h3>
      <form name="login" onSubmit={handleItem}>
      <label className="form-label">Item ID</label>
        <input type="text"  class="input" onChange={onItemidChange} required/><br/>
      <label className="form-label">Description</label>
        <input type="text"  class="input" onChange={onDescriptionChange} required/><br/>
      <label className="form-label">Issue Status</label>
      <select
              id="inputType"
              className="form-control"
              onChange={onIssueStatusChange}>
              <option value="text">Yes</option>
              <option value="text">No</option>
      </select><br/>
      <label className="form-label">Issue Category</label>
      <select
              id="inputType"
              className="form-control"
              onChange={onItemCategoryChange}>
              <option value="text">Furniture</option>
              <option value="text">Home</option>
              <option value="text">Gold</option>
              <option value="text">Education</option>
              <option value="text">Vehicle</option>
        </select><br/>
      <label className="form-label">Item value</label>
        <input type="text"  class="input" onChange={onItemValuationChange} required/><br/>
      <label className="form-label">Item Make</label>
      <select
              id="inputType"
              className="form-control"
              onChange={onItemMakeChange}>
              <option value="text">Furniture</option>
              <option value="text">Home</option>
              <option value="text">Gold</option>
              <option value="text">Education</option>
              <option value="text">Vehicle</option>
        </select><br/>
    
            <button type="submit" className="btn btn-primary">
              Add data
            </button>

      </form>
      </div>
  </div>
  )
}

export default ItemMaster;