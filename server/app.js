require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT ||  process.env.PORT_DEV

app.options('/queryData', cors()) // enable pre-flight request for login request
app.use(express.json())

//Returns copy of input string with spacing removed and lowercase chars
let crunchText = text => text.split(' ').join('').toLowerCase();

//Returns string in reverse
let reverseString = str => str.split('').reverse().join('');

//Returns true if input string is palindrome; false otherwise
function isPalindrome(word)
{
  let revWord = '';
  word = word.toLowerCase();
  revWord = reverseString(word).toLowerCase();

  return revWord === word ? true : false;
}

//returns array of all palindromes in given message text
function getPalindromes(qry, msg)
{
  let wordList = [];
  let palindromes = [];
  let i = 0;
  
  wordList = msg.split(' ');
  
  //compare all words in msg text
  for ([i, word] of wordList.entries())
  {
    //word is palindrome?
    if (isPalindrome(word))
    {
      //if not new line or empty string
      if ((word.length >= 1) && word != '\n')
      {
        //add palindrome to array list of returned values
        palindromes.push(word);
      }
    }
  }

  return palindromes;
}

//Returns number of occurrences that given qry string occurs in msg text
function getQryCnt(qry, msg)
{
  let qryCnt = 0;
  let ignSpaceMsg = '';
  let nextIndex = -1;

  qry = qry.toLowerCase();
  
  //strip space from text and convert to lowercase
  ignSpaceMsg = crunchText(msg);

  //get all occurrences of qry
  while (true)
  {
    nextIndex = ignSpaceMsg.indexOf(qry, nextIndex+1);
  
    if (nextIndex === -1)
    {
      break;
    }
    else 
    {
      qryCnt++;
    }
  }

  return qryCnt;
}

//Returns number of occurrences that reversed qry string occurs in msg text
function getRevQryCnt(qry, msg)
{
  let wordList = [];
  let revQryCnt = 0;
  let revMsg = '';
  
  revMsg = reverseString(msg);
  
  revQryCnt = getQryCnt(qry, revMsg);
  
  return revQryCnt;
}

let searchObj = 
{
  palindromes: [],
  qryCnt: 0,
  revQryCnt:0
};

                

// console.log(`Palindromes in text message: ${searchObj.palindromes.join(' ')}`);
// console.log(`There are ${searchObj.qryCnt} occurrences of the search string "${qry}"`);
// console.log(`There are ${searchObj.revQryCnt} reversed occurrences of the search string "${qry}"`);



/**
 * Route: /register
 * Note: use call back to prevent the server from executing the next line of codes until the database returns 
 */
app.post('/queryData',cors(), (req,res)=>{
    let user= {"body": req.body}
    let qry = req.body.query
    let msg= req.body.message
    console.log(':::body:::')
    console.log(user)
    console.log(qry)
    console.log(msg)
    
    searchObj.palindromes = getPalindromes(qry, 
        msg);

    searchObj.qryCnt = getQryCnt(qry, 
    msg);

    searchObj.revQryCnt = getRevQryCnt(qry, 
    msg);  
        
    console.log('::::: searchObj.palindromes::::')
    console.log(searchObj.palindromes.join(' '))
    console.log('::::: searchObj.qryCnt::::')
    console.log(searchObj.qryCnt)
    console.log(':::searchObj.revQryCnt::::')
    console.log( searchObj.revQryCnt)

    res.status(200).send(searchObj)
    })


//Heroku dynamically assigns your app a port, so you can't manually set the port to a fixed number. Heroku adds the port to the env, so you can pull it from there. 
app.listen(PORT, ()=>console.log(`Server has started on port: ${PORT}`))