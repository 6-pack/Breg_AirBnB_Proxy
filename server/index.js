const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(cors());
app.use(express.static(`./public`));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());




app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server listening on port 3000....');
});
