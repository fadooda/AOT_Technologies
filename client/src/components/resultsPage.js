import React, { useState, useEffect } from "react";
import * as ReactBoostrap from "react-bootstrap";

const ResultPage= () =>  {
    const [queryCount, setQueryCount]= useState()
    const [revQueryCount, setRevQueryCount]= useState()
    const [palindromeFound, setPalindromeFound]= useState()

    //onload set up state for query count, reverse query and palindromes found
  useEffect(() => {
    setQueryCount(localStorage.getItem('countQuery'))
    setRevQueryCount(localStorage.getItem('countReverseQuery'))
    setPalindromeFound(localStorage.getItem('palindromeFound'))
  }, []);
  return (
    <div >
        <ReactBoostrap.Form>
        <ReactBoostrap.Form.Group controlId="formBasicEmail">
            <ReactBoostrap.Form.Label>
                <ReactBoostrap.Form.Text className="text-muted">
                    Count of Query in Message
                </ReactBoostrap.Form.Text>
            </ReactBoostrap.Form.Label>
            <ReactBoostrap.Form.Control value={queryCount} disabled={true} type="text"/>
        </ReactBoostrap.Form.Group>
        <ReactBoostrap.Form.Group controlId="formBasicEmail">
            <ReactBoostrap.Form.Label>
                <ReactBoostrap.Form.Text className="text-muted">
                    Count of Reverse Query in Message 
                </ReactBoostrap.Form.Text>
            </ReactBoostrap.Form.Label>
            <ReactBoostrap.Form.Control value={revQueryCount} disabled={true} type="text"/>
        </ReactBoostrap.Form.Group>
        <ReactBoostrap.Form.Group controlId="exampleForm.ControlTextarea1">
            <ReactBoostrap.Form.Label>
                <ReactBoostrap.Form.Text className="text-muted">
                    Palindromes found in Message
                </ReactBoostrap.Form.Text>
            </ReactBoostrap.Form.Label>
            <ReactBoostrap.Form.Control value={palindromeFound} disabled={true} as="textarea" rows={7} />
        </ReactBoostrap.Form.Group>
        </ReactBoostrap.Form>
    </div>
    
  );
}

export default ResultPage;