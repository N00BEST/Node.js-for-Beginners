const fs = require('fs');


fs.writeFile('./modules/data.html', 'Hello. This file has just been modificated \n\n', 'UTF-8', (err)=>{
  if(err){
    console.log("Error: " + err);
  } else {
    console.log("File sucessfully written");
  }
});

fs.appendFile('./modules/data.html', 'Another line? or the same line?', 'UTF-8', (err)=>{
  if(err){
    console.log("Error: " + err);
  } else {
    console.log("File sucessfully written");
  }
});
