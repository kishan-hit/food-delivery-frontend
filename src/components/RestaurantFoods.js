import React,{useState,useEffect} from 'react'
import {useParams} from "react-router-dom"
import axios from 'axios'

const RestaurantFoods = () => {
    let {id} = useParams()
    const [Items, setItems] = useState([])
    useEffect(() => {
      const getItem = async()=>{
        const url = `http://localhost:8080/api/items/getItemByRes/${id}`
        console.log(url)
        const res = await axios.get(url)
        setItems(res.data)
        console.log(res.data)
      }
      getItem()
    }, [])
    

  return (
    <div>
    {
        Items.map((item)=>{
            return <div>
                <div>Item Name : {item.name}</div>
                <div><img src={item.image}/></div>
                <div>Add to Cart</div>
            </div>
        })
    }
    </div>
  )
}

export default RestaurantFoods