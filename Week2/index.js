
var fs = require("fs");

//PATH TO DATABASE
var itemInTheList = "./database.json";

function initail() {
  if (!fs.existsSync(itemInTheList)) {
    setData([]);
  }
};

function getData() {
  var text = fs.readFileSync(itemInTheList);
  var data = JSON.parse(text);
  return data;
}

function setData(data) {
  var myData = JSON.stringify(data);
  fs.writeFileSync(itemInTheList, myData);
}

//ADD ITEM
function add(item) {
  var data = getData();
  data.push({ item: item,});
  setData(data);
  list();
}

//CHECK ITEM
function check(item) {
  var data = getData();
  data[item].completed = !data[item].completed;
  setData(data);
  list();
}

//DELETE BTN
function erase(item) {
  var data = getData();
  data.splice(item, item + 1);
  setData(data);
  list();
}

//ITEM LIST
function list() {
  var data = getData();
  if (data.length > 0) {
    //ANSI
    console.log("\x1b[93m\x1b[4mTask list:\x1b[24m");
    data.forEach(function(item, index) {
      console.log(
        index + 1 + ".",
        " [" + (item.completed ? "\x1b[92m✓\x1b[93m" : " ") + "] ",
        item.item
      );
    });
  } else {
    console.log("\x1b[91mNo tasks added!!");
  }
}

var command = process.argv[2];
var argument = process.argv[3];

initail();

switch (command) {
  case "add":
    add(argument);
    break;
  case "check":
    check(argument - 1);
    break;
  case "delete":
    erase(argument - 1);
    break;
  case "help":
    break;
  case undefined:
    list();
    break;
  default:
    console.log("Please try again");
    break;
}
