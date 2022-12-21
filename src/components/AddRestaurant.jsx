import React,{useState} from 'react'
import "./restaurant.css"
import axios from "axios"

const AddRestaurant = () => {
    const [data, setdata] = useState({
        name : "",
        category : "",
        image : "",
        description : "",
        address : "",
        number : 0
    })
   const updateForm = (e)=>{
    const {name,value} = e.target
    setdata({...data,[name]:value})
   }
   const saveData = async()=>{
    console.log(data)
    const res = await axios.post("http://localhost:8080/api/restaurant/upload-restaurant",data)
    console.log(res)
   }
  return (
    <div>
        <div className='form-inner-div'><span className='span-div'>Name : </span><input name="name" onChange={updateForm} className='input-div' type="text"/></div>
        <div className='form-inner-div'><span className='span-div'>Category :</span><select name='category' onChange={updateForm} className='input-div'>
            <option default>Select Category</option>
            <option name="category" value="PIZZA">PIZZA</option>
            <option name="category" value="BURGER">BURGER</option>
            <option name="category" value="SOUTH-INDIAN">SOUTH INDIA</option>
        </select>
        </div>
        <div className='form-inner-div'><span className='span-div'>Image : </span><input name='image' onChange={updateForm} className='input-div' type="file" multiple accept="image/*"/></div>
        <div className='form-inner-div'><span className='span-div'>Description : </span><input name='description' onChange={updateForm} className='input-div' type="text"/></div>
        <div className='form-inner-div'><span className='span-div'>Address : </span><input name='address' onChange={updateForm} className='input-div' type="text"/></div>
        <div className='form-inner-div'><span className='span-div'>Number : </span><input name='number' onChange={updateForm} className='input-div' type="number"/></div>
        <div className='add-btn-outer'><div onClick={saveData} className='add-btn'>Add</div></div>
    </div>
  )
}

export default AddRestaurant