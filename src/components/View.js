
import React from 'react'
import Header from './Header'

const View = () => {
    var viewstud=[{"name":"Sneha","admission_no":"421","cgpa":"7.6"},
    {"name":"Sanjo","admission_no":"65465","cgpa":"8.2"},
    {"name":"Sajan","admission_no":"4216","cgpa":"8.9"},
    {"name":"Mily","admission_no":"6431","cgpa":"6.9"},
    {"name":"Leana","admission_no":"446132","cgpa":"7.6"},
    {"name":"Sonu","admission_no":"61358","cgpa":"8.3"}]
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