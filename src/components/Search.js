import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const Search = () => {
    var [admission_no,setAdmsn]=useState("")
    const [data,setData]=useState([{"name":"","cgpa":""}])
   
    const searchValues=()=>{
        
        const readValue={"admission_no":admission_no}
axios.post("http://localhost:7000/api/searchstud",readValue).then((response)=>{
    console.log(response.data)
    setData(response.data.data)
   
   
})
   }


   const deleteApi=(id)=>
   {
  const data={"_id":id} 
console.log(id)
axios.post("http://localhost:7000/api/deletestud",data).then((response)=>{
console.log(response.data)
if(response.data.status=="success")
{
    alert("data deleted")
}
else{
    alert("failed to delete")
}
})
   }


  return (
      
    <div>
       <Header/>
       <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Admission Number</label>
                    <input onChange={(a)=>{setAdmsn(a.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={searchValues} className="btn btn-info">SEARCH</button>
                </div>
                
            </div>
            
           {data.map((value,key)=>{
               return <div className="row">
               <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <label for="" className='form-label'>Name</label>
             <input type="text" value={value.name} className="form-control"/>
               </div>
          <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
          <label for="" className='form-label'>CGPA</label>
  <input type="text" value={value.cgpa}  className="form-control"/>
</div>

<div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
    <br></br>
<button onClick={()=>{deleteApi(value._id)}}  className="btn btn-info">DELETE</button>

</div>


</div>
           })}



            </div>
    </div>
</div>
    </div>
  )
}

export default Search