 import readline from  "readline";
 import fs from "fs";

 const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
 })

 const filecreation = () =>{
   rl.question('entr your filename:', (filename) =>{
    rl.question('Enter the file content:', (content) =>{
        fs.writeFile(`${filename}.txt`, content, (err) =>{
            if(err){
                console.log(`Error writing the file: , ${err.message}`);
            } else{
                console.log(`file "${filename}.txt" created successfully!`);
            }
            rl.close();
        })
    })
   })
 }
 filecreation();