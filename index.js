var express = require('express');
const fileUpload = require('express-fileupload');
var cors = require('cors');
require('dotenv').config()

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));
app.use(fileUpload());

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', async (req, res, next) => {
    const upfile = req.files.upfile;
    return res.json({name: upfile.name, type: upfile.mimetype, size: upfile.size});
});




const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
