const execute = require('child_process').exec;

execute("dir", (err, stdout)=>{
  if(err){
    return err;
  } else {
    console.log(stdout);
  }
});
