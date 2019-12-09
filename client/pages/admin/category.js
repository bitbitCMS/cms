// import dotenv from 'dotenv'
import { useState, useEffect } from "react"
import AdminLayout from 'layouts/AdminLayout'
import env from 'Config';
import Alert from 'lib/Alert'
import axios from 'axios'

// const env = dotenv.config().parsed;


const Category = () => {
  const [data, setdata] = useState({name:"", description:''})
  const [errors, setErrors] = useState([]);

  const onChange = ({target}) => {
    const {name, value} = target;

    setdata({...data, [name]:value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // const send = await axios.post(env.host+'/categories',{...data})
    const temp=[];
    Object.keys(data).forEach(item => {
      if (data[item] == '') {
        temp.push(item)
        setErrors(temp)
        // console.log(item)
      }
    })
  }
  
  
  const handleAlert = (element) => {
    let dataError = errors;

    let err = dataError.filter(item => {
      return item != element
    })

    setErrors(err)
  }

  const renderForm = () =>{
    return (
      <>
      {
        errors.map(item => (
          <Alert message={`${item} is required`} onClick={()=>handleAlert(item)}/>
        ))
      }

      <form>
          <div className="form-group">
              <label htmlFor="inputText3" className="col-form-label">Name</label>
              <input type="text" className="form-control" name="name" onChange={onChange} autoComplete="off"/>
              <small>The name is how it appears on your site</small>
          </div>
          <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Description</label>
              <textarea className="form-control"  rows="8" name="description" onChange={onChange} autoComplete="false"></textarea>
              <small>The description is prominent by default; however, some themes may show it</small>
          </div>
          <input type="submit" className="btn btn-primary" onClick={handleSubmit} value="Add New Category" />
      </form>
      </>
    )
  }

  const renderTable = () => {
    return (
      // <div className="card">
      //   <div className="card-body">
            <div className="table-responsive ">
                <table className="table table-bordered">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                    </tbody>
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                </table>
            </div>
    //     </div>
    // </div>
    )
  }

  return (
    <div className="row">
      <div className="col-xl-12 col-lg-12">
        <div className="row">
          <div className="col-xl-10 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="page-header" id="top">
                <h1 className="pageheader-title">Categories</h1>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 d-flex justify-content-end">
            <div className="form-group form-inline col-lg-5 col-sm-12 d-flex justify-content-end" style={{borderWidth:'1px'}}>
              <input className="form-control" name="search"/>
              <button className="btn btn-warning">Search</button>
            </div>
          </div>
        </div>
        <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="col">
                  <div className="row col">
                    <strong>Add Category</strong>
                  </div>
                {renderForm()}
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="col">
                <div className="row">
                  <div className="col d-flex justify-content-between align-items-center">
                    <div className="form-group form-inline">
                      <select className="form-control">
                        <option value="bulk">
                          Bulk Action
                        </option>
                        <option value="bulk">
                          Bulk Action
                        </option>
                        <option value="bulk">
                          Bulk Action
                        </option>
                        <option value="bulk">
                          Bulk Action
                        </option>
                      </select>
                      <button className="btn btn-success ml-1">
                        Apply
                      </button>
                    </div>
                    <p>1 items</p>
                  </div>
                </div>
                {renderTable()}
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

Category.Layout = AdminLayout

export default Category
