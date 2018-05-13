const fs = require('fs')
const download = require('download')

const fileList = require('./list-of-files.json')

Promise.all(fileList.map(item => download(item, 'fotos')))
    .then(()=>{
        console.log('all files downloaded')
    });