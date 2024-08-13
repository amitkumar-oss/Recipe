import React from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { Rate } from 'antd';
import { Button } from 'bootstrap/dist/js/bootstrap.bundle.min';

const ViewDetails = () => {

  let arr=JSON.parse(localStorage.getItem('fav'))||[]

  let location = useLocation()
  console.log(location)
  console.log(location.state)
  let data = location.state.recipe

  const handleFav=()=>{
    // console.log('hiiiii')
    console.log(location.state.recipe)
    arr.push(location.state.recipe)
    console.log(arr)

    localStorage.setItem('fav',JSON.stringify(arr))
  }



  return (



    <div className="card py-2 container" >

      <div className="row g-0 ">
        <div className="col-md-4">
          <img src={data.image}  className="img-fluid rounded-start  " alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h4 className="card-title">{data.label}</h4>

            <h6> Meal Type: {data.mealType}</h6>
            <Link to={data.shareAs} className='btn btn-success'> how to make</Link> 
            <button className='btn btn-primary mx-3'onClick={handleFav} >Favourite</button> 

            
            <p>Rating: <Rate disabled defaultValue={3} /></p>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <div className='row pe-2 '>
              <div className='col-sm-3 border border-warning  text-center  mx-2 my-2 p-2 ' >
                <h6>Fat </h6>
                <span>{Math.ceil(data.totalNutrients.FAT.quantity)}</span>
                <span>{data.totalNutrients.FAT.unit}</span>

              </div>
              <div className='col-sm-3 border border-warning  text-center  mx-2 my-2 p-2 ' >
                <h6>Cholesterol</h6>
                <span>{Math.ceil(data.totalNutrients.CHOLE.quantity)}</span>
                <span>{data.totalNutrients.CHOLE.unit}</span>

              </div>
              <div className='col-sm-3  border border-warning  text-center  mx-2 my-2 p-2 ' >
                <h6>Vitamin B6 </h6>
                <span>{Math.ceil(data.totalNutrients.VITB6A.quantity)}</span>
                <span>{data.totalNutrients.VITB6A.unit}</span>

              </div>
              <div className='col-sm-3  border border-warning  text-center  mx-2 p-2 ' >
                <h6>Sugar </h6>
                <span>{Math.ceil(data.totalNutrients.SUGAR.quantity)}</span>
                <span>{data.totalNutrients.SUGAR.unit}</span>

              </div>
              <div className='col-sm-3  border border-warning  text-center  mx-2 p-2 ' >
                <h6>Phosphorus </h6>
                <span>{Math.ceil(data.totalNutrients.P.quantity)}</span>
                <span>{data.totalNutrients.P.unit}</span>

              </div>
              <div className='col-sm-3  border border-warning  text-center  mx-2 p-2 ' >
                <h6>Vitamin B12 </h6>
                <span> {Math.ceil(data.totalNutrients.VITB12.quantity)}</span>
                <span> {data.totalNutrients.VITB12.unit}</span>

              </div>

            </div>
          </div>
        </div>

      </div>

      <ol className='my-5 mx-2'>
        <h5>Ingredient</h5>
        {data.ingredientLines.map((ele) => {
          return <li>{ele}</li>

        })}

      </ol>
    </div >

  )
}

export default ViewDetails
