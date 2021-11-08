import React,{useState, useEffect} from 'react'

function ViewDB() {

    const [data, setData] = useState([])

    const getData = () => {
        fetch(`http://localhost:3000/posts`)
        .then((result) => {result.json()
        .then((resp) => {setData(resp)})
        })
    }
    useEffect(() => {
        getData()
    })

    const handelDelete = (id) => {
        fetch(`http://localhost:3000/posts/${id}`,{
            method:"DELETE",
        })
        .then((result) => {result.json()
        .then(getData)
        })
    }
    return (
        <div>
            <h1>View Data Base</h1>
            <div class="container mt-3">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>City</th>
                        <th>Phone</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                          data.map((elem) => {
                              return(
                                  <>
                                  <tr>
                                    <td>{elem.name}</td>
                                    <td>{elem.age}</td>
                                    <td>{elem.city}</td>
                                    <td>{elem.phone}</td>
                                    <td><button onClick={() => handelDelete(elem.id)}>Del</button></td>
                                  </tr>
                                  </>
                              )
                          })
                      }
                      
                    </tbody>
                  </table>
                </div>
        </div>
    )
}

export default ViewDB
