const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

const router = express.Router();
var numbers  = []
var alphabets  = []
// POST endpoint
app.post('/bfhl', (req, res) => {
    numbers = []
    alphabets  = []
  var data = req.query.data;
  data = data.substring(1, data.length-1)
  data.split(",").every(eachElement)

  var highest = alphabets.sort()[alphabets.length-1]
  const response = {
    "is_success": 'true',
    "user_id":"bhanu_pratap_30052002",
    "email":"bs3128@srmist.edu.in",
    'roll_number':"RA2011003011149",
    "numbers":numbers,
    "alphabets":alphabets,
    "highestAlphabet":highest,
  };

  res.json(response);
});

// GET endpoint
app.get('/bfhl', (req, res) => {
  const operationCode = '1'; 
  res.json({ operationCode });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

function eachElement(ele) {
    element = ele.substring(1, ele.length-1)
    if (String(Number(element)) == element) {
        numbers.push(Number(element))
        return Number(element)
    } else {
        alphabets.push(element)
        return element
    }
}