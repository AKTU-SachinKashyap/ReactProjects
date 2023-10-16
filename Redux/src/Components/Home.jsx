import React from 'react'
import './Home.css'

function Home(props) {
    console.warn("Home", props.data)    

  return (
    <div> 
      <h1 className='P'>Home  Component  !!</h1>
      <div className='cart-wrapper'>
            <div className='img-wrapper-item'>
                <img className='img-wrapper' src='https://www.cricketwireless.com/newsroom/images/Apple_iphone12.jpg'></img>
            </div>
            <div className='text-wrapper-item'>
                <span>
                    I-Phone
                </span>
                <span> 
                    Price : 1000.00₨
                </span>
            </div>
            <div className='btn-wrapper-item'>
                <button className='btn-wrapper' 
                    onClick={()=>props.addToCartHandler({price:1000, name:'i phone 14'})}

                >Add To Cart</button>
                <button className='remove-btn-wrapper' 
                    onClick={()=>{props.addToCartHandler()}}

                >Remove To Cart</button>
            </div>
           
        </div>
    </div>
  )
}

export default Home
