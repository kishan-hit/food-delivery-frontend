import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "./restaurant.css"
import { useNavigate } from "react-router-dom"

const Restaurant = () => {
    const [restaurants, setrestaurants] = useState([])
    const [user, setuser] = useState(null)
    const navigate = useNavigate();
    useEffect(() => {
        const tok = localStorage.getItem('token')
        const getUser = async () => {
            axios.defaults.headers.common['Authorization'] = `Bearer ${tok}`;
            const res = await axios.post("http://localhost:8080/api/auth/validate");
            setuser(res.data)
        }
        if (tok && tok.length > 1) getUser()
        const getRest = async () => {
            const res = await axios.get("http://localhost:8080/api/restaurant/getRestaurant");
            if (res.data) {
                setrestaurants(res.data);
                console.log(res.data)
            } else {
                alert("Error while fetching Restaurants")
            }
        }
        getRest()
    }, [])
    const getFood = (id) => {
        navigate(`/restaurant/${id}`)
    }
    const additem = (resta) => {
        navigate("/add-food", {
            state: {
                restaurant: resta
            }
        })
    }
    return (
        <div>
            {
                restaurants.map((restaurant) => {
                    return (
                        <div className='cards'>
                            <div className='card'>
                                <div className='flex-child'>
                                    <img src={restaurant.image} />
                                </div>
                                <div className='flex-child'>
                                    <div className='restaurant-info'>
                                        <div className='card-components'>{restaurant.name}</div>
                                        <div className='card-components'>{restaurant.address}</div>
                                    </div>
                                </div>
                            </div>
                            {user && user.role=="user" && <div onClick={() => { getFood(restaurant._id) }} className='orderbutton'><span>Order</span></div>}
                            {user && user.role=="admin" && <div onClick={() => { additem(restaurant) }} className='orderbutton'><span>Update</span></div>}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Restaurant

{/* <div>Name : {restaurant.name}</div>
                <div>Name : {restaurant.address}</div>
        <div onClick={()=>{getFood(restaurant._id)}} className='orderbutton'>Order</div> */}