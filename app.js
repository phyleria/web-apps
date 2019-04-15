var express = require ('express');
var chalk = require('chalk')
var app = express();
var debug = require('debug')(app);
var path = require('path');

app.use(morgan('tiny'));
app.get('/',function(req,res) {
    res.sendFile(path.join(_dirName, 'views/index.html'));
})
app.listen(3000,function()
{console.log(`listening on port ${chalk.yellow('3000')}`);
})