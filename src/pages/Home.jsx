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

  console.log(users)
  useEffect(() => {
    fetchData()
  }, [])
  // let email = localStorage.getItem('email')
  // let password = localStorage.getItem('password')
  // let name = localStorage.getItem('name')
  // let str = `mailto:${email}`
  // let userObject = {
  //   "name": name,
  //   "email": email,
  //   "password": password, 
  // }

  return (
    <>
      <div style={{ fontSize: "3rem", textAlign: "center", margin: "1%" }}>Dashboard</div>
      <table>
      <tr>
        <th>Sno</th>
        <th>name</th>
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
