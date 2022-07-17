import React, { useEffect, useState } from 'react'
import {InputGroup, Form, Container} from 'react-bootstrap'

export default function Search({onSearchData}) {
    const [searchData,setSearchData] = useState("")

    useEffect(()=>{
      onSearchData(searchData)
    })

  return (
    <Container>
     <InputGroup size="sm" className="mb-3 mt-3 w-25 m-auto">
            <Form.Control
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              placeholder='Search here'
              onChange={(e)=>{
                setSearchData(e.target.value)
              }}
            />
      </InputGroup>
    </Container>
    
  )
}
