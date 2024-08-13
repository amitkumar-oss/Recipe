import React from 'react'
import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';

const Pagenotfound = () => {
  return (
    <div>
     <Result
    status="403"
    title="403"
    subTitle="Sorry, you are not authorized to access this page."
    extra={<Link to="/" className="btn btn-primary">Back Home</Link>}
  />
    </div>
  )
}

export default Pagenotfound
