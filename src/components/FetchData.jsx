import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';
const FetchData = ({cat}) => {
    const [Data, setData] = useState("")
    const fetchData= async()=>{
        // await axios
        // .get(
        //     cat?`https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=7feca11ab23c450588f0227644693d10`
        //     :"https://newsapi.org/v2/top-headlines?country=in&apiKey=7feca11ab23c450588f0227644693d10"
        // ).then((res)=>setData(res.data.articles));

        var result = await fetch(cat?`https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=7feca11ab23c450588f0227644693d10`:"https://newsapi.org/v2/top-headlines?country=in&apiKey=7feca11ab23c450588f0227644693d10")

        const data = await result.json()
        setData(data.articles)
        console.log(data)
    };
    useEffect(() => {
    fetchData();
    }, [cat])
  return (
    <div className='container-fluid py-4' style={{backgroundColor: "#e0e0e0"}}>
        <h2 className='d-flex justify-content-center'><u>TOP HEADLINES</u></h2>
        <div className='container d-flex justify-content-around flex-wrap my-3'style={{minHeight:"100vh"}}>
            {Data ? Data.map((items,index)=>(
            <>
                <div className="container my-3 p-3 " style={{width:"600px",boxShadow:"6px 6px 10px 4px silver",borderRadius:"10px", backgroundColor
        : "#edf1f2"}}>
                <h5 className='my-2'>{items.title}</h5>
                <div className="d-flex justify-content-center align-items-center">
                <img src={items.urlToImage} className='img-fluid' alt="not found" 
                style={{width:"100%",height:"300px",objectFit:"cover"}}/>
                </div>
                
                <p className='my-1'>{items.content}</p>
                <a className='my-1' href={items.url} target="blank">
                    View More</a>
            </div>
            </>
        )):"LOADING...."}</div>
        </div>
  )
}

export default FetchData