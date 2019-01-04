function callFunction(fun){
    fun();
}
//normal function statement
function sayHi(){
    console.log('hi');
    
}

sayHi();

//function expression

var sayBye = function(){
    console.log('bye');
};

sayBye();

callFunction(sayBye);








// var fs = require('fs');

// var file = fs.readFile('input.txt','utf8',function(err,data){
//     fs.writeFile('writeme.txt',data);
//     console.log(data);
// });

// console.log('This is an instruction outside the sync file system.');