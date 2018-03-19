const fs = require('fs');

if (!fs.exists('views')){

  fs.mkdir('views', (err)=>{
    if(err) {
      return err;
    } else {
      fs.writeFile('./views/new.html', 'this is a new file in a new directory', (err)=>{
        if (err) {
          return err;
        }

        console.log('Directory and file saved');
      });
    }
  });
}
