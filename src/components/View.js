
import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const View = () => {
    var [viewstud,setViewstud]=useState([])
    axios.get("http://localhost:7000/api/viewstud").then((response)=>{
console.log(response.data)
setViewstud(response.data)
    })

const deleteRow=((id)=>{
const data={"_id":id}
  console.log(id)
  axios.post("http://localhost:7000/api/deletestud",data).then((response)=>{
console.log(response.data)
if(response.data.status=="success")
{
  alert("data deleted successfully")
}
else{
  alert("deletion failed")
}
  })
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
       <th scope="col">Delete</th>
     
    </tr>
  </thead>
  <tbody>
   {viewstud.map((value,key)=>{
 return <tr>
 <th scope="row">{value.name}</th>
 <td>{value.admission_no}</td>
 <td>{value.cgpa}</td>
 <td> <button onClick={()=>{deleteRow(value._id)}} className="btn btn-danger">DELETE</button></td>

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