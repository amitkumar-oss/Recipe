import React from 'react'

const Favourite = () => {

  let arr = JSON.parse(localStorage.getItem('fav'))
  console.log(arr)

  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">SNo</th>
            <th scope="col">Items</th>
            <th scope="col">Name</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          
            {
              arr.map((ele,index)=>{
                return <tr>
                <th scope="row">{index+1}</th>
                <td><img src={ele.image}  style={{height:'150px',width:'150px',borderRadius:'20px',boxShadow:'0px 0px 10px 1px black'}}   alt="" /></td>
                <td>  {ele.label} </td>
                <button type='button' className='btn btn-danger'>Remove</button>
          
              </tr>


              })
            }
            
          
          
        </tbody>
      </table>





    </div>
  )
}

export default Favourite
