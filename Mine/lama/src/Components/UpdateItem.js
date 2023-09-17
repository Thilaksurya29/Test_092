import React from "react"
import './ItemMaster.css'
import {addItem, getByItem} from './api.js'
import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const UpdateItem = () => {
const[itemid, setItemid] = useState("");
const[description, setDescription] = useState(""); 
const[issueStatus,setIssueStatus] = useState("");
const[itemMake, setItemMake] = useState("");
const[itemCategory, setItemCategory] = useState("");
const[itemValuation, setItemValuation] = useState("");

const navigate = useNavigate();
const params=useParams();

useEffect(() => {
    return async ()=>{
     const result= await getByItem(params.itemid);
     console.log(result)
     setItemid(result.itemid)
     setDescription(result.description);
     setIssueStatus(result.issueStatus);
     setItemMake(result.itemMake);
     setItemCategory(result.itemCategory);
     setItemValuation(result.itemValuation);
    }
}, []);


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
    navigate("/item")
   
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleItem}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Update Item</h3>
          <div className="form-group ">
            <label className="form-label">Item ID</label>
            <input
              type="text"
              className="form-control "
              onChange={onItemidChange}
            />
          </div>
          <div className="form-group ">
            <label className="form-label">Item Description</label>
            <input
              type="text"
              className="form-control "
              onChange={onDescriptionChange}
            />
          </div>
          <br/>
          <div className="form-group ">
            <label className="form-label">Issue Status</label>
            <select
              id="inputType"
              className="form-control"
              onChange={onIssueStatusChange}>
              <option value="text">Yes</option>
              <option value="text">No</option>
              </select>
          </div>
          <div className="form-group ">
            <label className="form-label">Item Category</label>
            <select
              id="inputType"
              className="form-control"
              onChange={onItemCategoryChange}>
              <option value="text">Furniture</option>
              <option value="text">Home</option>
              <option value="text">Gold</option>
              <option value="text">Education</option>
              <option value="text">Vehicle</option>
              </select>
          </div>
          <br/>
          <div className="form-group ">
            <label className="form-label">Item Value</label>
            <input
              type="text"
              className="form-control "
              onChange={onItemValuationChange}
            />
          </div>
          <div className="form-group ">
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
              </select>
          </div>
          <br/>
          <div className="col-sm-10">
            <button type="submit" className="btn btn-primary">
              Add data
            </button>
          </div>
          <br/>
        </div>
      </form>
    </div>
  )
}

export default UpdateItem;