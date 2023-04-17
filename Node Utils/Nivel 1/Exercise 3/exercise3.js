const fcompress = (fileName) => {
    const zlib = require('zlib');
    const gzip = zlib.createGzip();
    const fs3 = require('fs');
    const inp = fs3.createReadStream(fileName);
    const out = fs3.createWriteStream('fichero.txt.gz');
    inp.pipe(gzip).pipe(out)
}

fcompress('fichero.txt');