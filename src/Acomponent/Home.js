import React,{useState} from 'react'
import { addbutton } from '../action/Action'
import { useDispatch} from 'react-redux'
import shortid from 'shortid'
import ViewData from './ViewData'
import {BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom'
function Home() {
    const [name ,setName] = useState()
    const [age ,setAge] = useState()
    const [city ,setCity] = useState()
    const [phone ,setPhone] = useState()

    const dispatch = useDispatch()

    const handelSubmit = () => {
        const dataList = {
            id: shortid.generate(),
            name: name,
            age:age,
            city: city,
            phone: phone
        }
        dispatch(
            addbutton(dataList),
            setName(''),
            setAge(''),
            setCity(''),
            setPhone('')
            )

        const postdata = {name, age,city,phone}
        fetch("http://localhost:3000/posts",{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(postdata)
        })
    }
    return (
        <div>
            <h1>Home</h1>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} /><br /><br />
            <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} /><br /><br />
            <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} /><br /><br />
            <input type="number" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} /><br /><br />
            <button onClick={handelSubmit}>Submit</button>
            <hr />
            <Router>
              <div id="max">
                <NavLink className="navv" to="viewdata">View Data</NavLink>
              </div>
              <Switch>
                <Route exact path ="/viewdata" exact component={ViewData} />
              </Switch>
            </Router>
        </div>
    )
}

export default Home
