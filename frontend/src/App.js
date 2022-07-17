import React, { useEffect, useState } from "react";
import axios from "axios"
import {Card, Container, Row, Col, Button} from 'react-bootstrap'

import Input from "./Component/Input";
import Search from "./Component/Search";
import "./Style.css"

function App() {
  const URL = "http://localhost:5000/api/users/"
  const [userInfo,setUserInfo] = useState([])
  const [isLoading,setIsLoading] = useState(false)
  const [error,setError] = useState("")
  const [selectToEdit,setSelectToEdit] = useState(null)
  const [userId,setUserId] = useState(null)
  const [isEdited,setIsEdited] = useState(false)
  const [filteredClient,setFilteredClient] = useState(userInfo)

  // Fatching all data / READ
  const getAllUser = ()=>{
    axios.get(URL)
        .then((res)=>{
            setIsLoading(true)
            setUserInfo(res.data)
            setFilteredClient(res.data)
        })
        .catch((error)=>{
          setIsLoading(false)
          setError(error.message)
        })
  }

  useEffect(()=>{
      getAllUser()
  },[])

  // Creating an entry / CREATE
  const addUser = (user)=>{
    axios.post(URL,user)
        .then((res)=>{
          if (res.status === 201) {
            getAllUser();
          } else {
            throw new Error("could not create new user");
          }
        })
        .catch((error)=>{
          setError(error.message)
        })
  }

  // Editing an entry / UPDATE 
  const editUser = (id)=>{
      setIsEdited(true)
      setUserId(id)
      const selectedUser = userInfo.filter((user)=> user.id === id)
      setSelectToEdit({
        name: selectedUser[0].name,
        email: selectedUser[0].email
      })
  }
  const handleEditedUser = (user)=>{
    axios.patch(URL+`/${userId}`,user)
    .then((res)=> {
      getAllUser()
      setIsEdited(false)
    })
    .catch((error)=>{
      setError(error.message)
    })
  }

  // Deleting an entry / DELETE
  const deleteUser = (id)=>{
    axios.delete(URL+`/${id}`)
    .then((res)=> {
      getAllUser()
      setIsEdited(false)
    })
    .catch((error)=>{
      setError(error.message)
    })
  }

  const handleSearchData = (searchValue)=>{
    const value = searchValue.toLowerCase()
    const clientSearch = userInfo.filter((data)=>{
      const clientName = data.name.toLowerCase()
      return clientName.startsWith(value)
    })
    setFilteredClient(clientSearch)
  }

  return (
    <>
      {!isLoading ? <h1 className="text-center">Data is Loading</h1> : 
      isEdited ? <Input onGetData={handleEditedUser} editData={selectToEdit} btnText="Edit User"/> : <Input onGetData={addUser} btnText="Add User"/>}
      
      {error && <h1 className="text-center">{error}</h1>}

      {isLoading && <Search onSearchData={handleSearchData} />}
      
      <Container className="mt-3">
        <Row>
            {userInfo && filteredClient.map((user)=>{
              const {id,name,email} = user
              return <Col key={id} lg={4} className="text-center">
                      <Card className="mb-4 bg-light">
                          <Card.Body>
                            <Card.Title>{name.toUpperCase()}</Card.Title>
                            <Card.Subtitle className="mb-3">{email}</Card.Subtitle>
                            <Button variant="dark" className="btnAllEdit w-25 m-1" onClick={()=>{editUser(id)}}>
                              Edit
                            </Button>
                            <Button variant="dark" className="btnAllDelete w-25 m-1" onClick={()=>{deleteUser(id)}}>
                              Delete
                            </Button>
                          </Card.Body>
                      </Card>
                    </Col>
            })}
        </Row>
      </Container>

    </>
  );
}

export default App;
