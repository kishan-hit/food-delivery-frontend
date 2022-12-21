import React,{useState,useEffect} from 'react'
import "./Food.css"
import axios from "axios"
import {useLocation} from "react-router-dom"

const AddFood = () => {
    const [data, setdata] = useState({
        name : "",
        rid: "",
        price: "",
        image : "",
        description : "",
    })
    const [rstnt, setrestaurant] = useState(null)
    const {state} = useLocation();
    const {restaurant} = state
    useEffect(() => {
      setrestaurant(restaurant)
      setdata({...data,name:restaurant.name,rid:restaurant._id})
    }, [])
    
   const updateForm = (e)=>{
    console.log(rstnt)
    const {name,value} = e.target
    setdata({...data,[name]:value})
   }
   const saveData = async()=>{
    console.log(data)
    const res = await axios.post("http://localhost:8080/api/items/upload-item",data)
    console.log(res)
    alert("Item added successfully");
   }
  return (
    <div>
        <div className='form-inner-div'><span className='span-div'>Name : </span><input name="name" onChange={updateForm} value={rstnt && rstnt.name} disabled className='input-div' type="text"/></div>
        <div className='form-inner-div'><span className='span-div'>Restaurant Id : </span><input name="rid" onChange={updateForm} value={rstnt && rstnt._id} disabled  className='input-div' type="text"/></div>
        <div className='form-inner-div'><span className='span-div'>Price : </span><input name="price" onChange={updateForm} className='input-div' type="number"/></div>
        <div className='form-inner-div'><span className='span-div'>Image : </span><input name='image' onChange={updateForm} className='input-div' type="text"/></div>
        <div className='form-inner-div'><span className='span-div'>Description : </span><input name='description' onChange={updateForm} className='input-div' type="text"/></div>
        <div className='add-btn-outer'><div onClick={saveData} className='add-btn'>Add</div></div>
    </div>
  )
}

export default AddFood