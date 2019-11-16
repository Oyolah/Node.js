const yargs = require('yargs');
const commands = require('./commands');

let command = yargs.argv._[0];
let item = yargs.argv.item;

if (command === "add"){
    if (item){
        commands.add(item)
    }

}else if(command === "remove"){
    if(item){
        commands.remove(item);
    }
    
}else if (command === "print"){
    commands.print();

}else {
    console.log("Ok, this doesnt make any sense")
};