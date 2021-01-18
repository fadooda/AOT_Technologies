import React, { useState, useEffect } from "react";
import * as ReactBoostrap from "react-bootstrap";
import './styles/aotForm.css'
import axios from 'axios'



const LandingPage= () => {
    const [query, setQuery]= useState()
    const [message, setMessage]= useState()

    //if user enters in the text input for query update accordingly
    const handleOnQueryChange=e=>{
        e.preventDefault();
        const {  value } = e.target;
        setQuery(value)
        console.log('query')

    }
    //if user enters in the text input for message update accordingly
        const handleOnMessageChange=e=>{
        e.preventDefault();
        const {  value } = e.target;
        setMessage(value)
        console.log('message')

    }
    const handleClick =  ()=>{
        axios.post('http://localhost:4000/queryData', {query,message})
        .then(res => { 
            localStorage.setItem('palindromeFound', res.data.palindromes)
            localStorage.setItem('countQuery', res.data.qryCnt)
            localStorage.setItem('countReverseQuery', res.data.revQryCnt)
            window.open('/resultsPage','_blank')
        })
        .catch(error =>{
          alert(error)
        })

    }
    return (
      <div className='formlayout'>
        <ReactBoostrap.Form>
        <ReactBoostrap.Form.Group controlId="formBasicEmail">
            <ReactBoostrap.Form.Label>
                <ReactBoostrap.Form.Text className="text-muted">
                    Query
                </ReactBoostrap.Form.Text>
            </ReactBoostrap.Form.Label>
            <ReactBoostrap.Form.Control type="text" onChange={handleOnQueryChange} placeholder="Enter Query" />
        </ReactBoostrap.Form.Group>
        <ReactBoostrap.Form.Group controlId="exampleForm.ControlTextarea1">
            <ReactBoostrap.Form.Label>
                <ReactBoostrap.Form.Text className="text-muted">
                    Message
                </ReactBoostrap.Form.Text>
            </ReactBoostrap.Form.Label>
            <ReactBoostrap.Form.Control as="textarea" onChange={handleOnMessageChange} rows={7} />
        </ReactBoostrap.Form.Group>
        <div className='leftpad'>
        <ReactBoostrap.Button className="placebutton" variant="primary"   onClick={handleClick}>
            Search
        </ReactBoostrap.Button>
        </div>
        </ReactBoostrap.Form>
      </div>
    );
}

export default LandingPage;