var fs = require('fs');

fs.rename('michal.txt', 'michalczewski.txt',  function (err){
    if (err) throw err;
    console.log('File renamed');
})