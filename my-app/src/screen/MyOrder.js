import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function MyOrder() {

    const [orderData, setorderData] = useState([])

    const fetchMyOrder = async () => {
        console.log(localStorage.getItem('userEmail'))
        await fetch("http://localhost:5000/api/myorderData", {
            // credentials: 'include',
            // Origin:"http://localhost:3000/login",
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                email:localStorage.getItem('userEmail')
            })
        }).then(async (res) => {
            let response = await res.json()
            console.log("Response from server:", response);
            await setorderData(response)
        })




        // await res.map((data)=>{
        //    console.log(data)
        // })


    }

    useEffect(() => {
        fetchMyOrder()
    }, [])

    return (
        <div>
            <div>
                <Navbar />
            </div>

            <div className='container'>
                <div className='row'>
  {orderData.length > 0 ? orderData.map((orderArray, index) => (
    <React.Fragment key={index}>
      {orderArray.map((item, idx) => (
        item.Order_date ? (
          <div key={idx} className='m-auto mt-5'>
            {item.Order_date}
            <hr />
          </div>
        ) : (
          <div key={idx} className='col-12 col-md-6 col-lg-3'>
            <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
              
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <div className='container w-100 p-0' style={{ height: "38px" }}>
                  <span className='m-1'>{item.qty}</span>
                  <span className='m-1'>{item.size}</span>
                  <div className=' d-inline ms-2 h-100 w-20 fs-5'>
                    ₹{item.price}/-
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      ))}
    </React.Fragment>
  )) : <p>No orders found</p>}
</div>



            </div>

            <Footer />
        </div>
    )
}
