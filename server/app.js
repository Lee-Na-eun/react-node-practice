const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors');
const bodyParser = require('body-parser');
const indexRouter = require("./routes/index");

app.use(indexRouter);
app.use(cors());
app.use(bodyParser.json());


app.post('/signin', function (req, res) {
  var user_name=req.body.email;
  var password=req.body.password;
  if(user_name=='admin' && password=='admin'){
    res.send('success');
  }
  else{
    res.send('Failure');
  }
})


app.listen(port, () => console.log(`listening on port ${port}`));