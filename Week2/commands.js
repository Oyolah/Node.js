const fs = require('fs');
const readFile = (fineName) => {
    try {
        return JSON.parse(fs.readFileSync("todos.json"));
       } catch(e){
           return []
       }
}

//Add item into the list
const add = (item) => {
    let todosList = [];
    try{
        todosList = JSON.parse(fs.readFileSync("todos.json"));
    } catch (e){
        console.log(e)
    }
    todosList.push(item);
    console.log(todosList)

   fs.writeFileSync("todos.json",JSON.stringify(todosList));
};

//remove item from the list
const remove = (item) => {
    let todosList = [];
    try{
        todosList = JSON.parse(fs.readFileSync("todos.json"));
    } catch (e){
        console.log(e)
    }
    const filteredList = todosList.filter( (x) => x.item === item);
    
    fs.writeFileSync("todos.json", JSON.stringify(filteredList));

}

//print list
const print = () => {
    let todosList = [];

    try{
        todosList = JSON.parse(fs.readFileSync("todos.json"));
    } catch (e){
        //console.log(e)
    }
       console.log(todosList)
}


module.exports = {
    add,
    remove,
    print
}