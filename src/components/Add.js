import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const Add = () => {
    var [name,setName]=useState("")
    var [admsn,setAdmsn]=useState("")
    var [cgpa,setCgpa]=useState("")

    const submitValues=(()=>{
        var data={"name":name,"admission_no":admsn,"cgpa":cgpa}
        console.log(data)
        axios.post("http://localhost:7000/api/addstud",data).then((response)=>{
        console.log(response.data)
        if(response.data.status=="Success")
        {
            alert("successfully inserted")
        } 
        else
        {
            alert("insertion failed")   
        }   
        })
    })
    
  return (
    <div>
        <Header/>

        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Name</label>
                    <input onChange={(a)=>{setName(a.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Admission Number</label>
                    <input onChange={(a)=>{setAdmsn(a.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">CGPA</label>
                    <input onChange={(a)=>{setCgpa(a.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={submitValues} className="btn btn-info">SUBMIT</button>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Add