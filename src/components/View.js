
import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const View = () => {
    var [viewstud,setViewstud]=useState([])
    axios.get("http://localhost:7000/api/viewstud").then((response)=>{
console.log(response.data)
setViewstud(response.data)
    })
  return (
    <div>
        <Header/>
<br>
</br>
<div className='container'>
    <div className='row'>
        <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
        <table className="table table-secondary">
  <thead className='table-success'>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Admission number</th>
      <th scope="col">CGPA</th>
     
    </tr>
  </thead>
  <tbody>
   {viewstud.map((value,key)=>{
 return <tr>
 <th scope="row">{value.name}</th>
 <td>{value.admission_no}</td>
 <td>{value.cgpa}</td>

</tr>
   })}
    
  </tbody>
</table>
        </div>

    </div>

</div>

    </div>
  )
}

export default View