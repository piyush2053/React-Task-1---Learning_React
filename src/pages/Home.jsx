import React from "react";
import "./Home.css"
import { useEffect, useState } from "react"

const Home = () => {
  const [users, setUsers] = useState([])

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }
  const [originalData, setOriginalUsers] = useState([])

  const fetchData1 = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setOriginalUsers(data)
      })
  }
  useEffect(() => {
    fetchData()
  }, [])
  useEffect(() => {
    fetchData1()
  }, [])

  const sortIn = () => {
    setUsers(originalData)

  }
  const sortOut = () => {
    users.sort((a, b) => {
      let fa = a.name.toLowerCase(),
        fb = b.name.toLowerCase();
      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });

    localStorage.setItem("users", JSON.stringify(users))

    users.forEach((e) => {
      console.log(`${e.name}`);
    });
    let users1 = localStorage.getItem('users')

    setUsers(JSON.parse(users1))
  }


  return (
    <>
      <div style={{ fontSize: "3rem", textAlign: "center", margin: "1%", marginBottom: "10px" }}>Dashboard</div>
      <button className="btn btn-primary" style={{ width: "90px", borderRadius: "10px", marginRight: "10px", marginBottom: "10px" }} onClick={(e) => sortOut()} >Sort</button>

      <button className="btn btn-primary" style={{ width: "90px", borderRadius: "10px" }} onClick={(e) => sortIn()} >UnSort</button>
      <table>
        <tr >
          <th >Sno</th>
          <th >name</th>
          <th>Email</th>
        </tr>
        {users.map((item, ind) => (
          <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
          </tr>

        ))}
      </table>


    </>
  )

};

export default Home;
