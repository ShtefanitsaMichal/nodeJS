var http = require('http');

http.createServer(function (req, res) {
    if (res.url == '/filetoupload'){
        var form = new formdable.IncomingFrom();
        form.parse(req, function (err, fields, files){
            var oldpath = file.filetoload.path;
            var newpath = '/Users/Michal/-nodeJS' + files.filetoupload.name;
            fs.rename(oldpath, newpath, function(err){
                if (err) throw err;
                res.write('File uploaded and moved!');
                res.end();
            })
        });
    } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
    }
}).listen(8080);