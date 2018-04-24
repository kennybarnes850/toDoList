var todos = [];

var input = prompt("What would you like to do?");

while(input !== "quit"){
    //handle input
    if(input === "list"){
        console.log("**********")
        todos.forEach(function(todo, index){
        console.log(index + ": " + todo);
        });
        console.log("**********")
    } else if(input === "new"){
        //ask user for a new todo
        var newTodo = prompt("Enter new todo");
        //add to todos array
        todos.push(newTodo);
        console.log("Added Todo");
    }else if(input === "delete"){
        //ask for undex of Todo to be deleted
        var index = prompt("Enter index of todo to delete");
        //delete that Todo 
        //I get introduced to splice =) it allows you to choose from the index. in this case I want to be able to choose a Todo from my list to delete
        todos.splice(index,1);
        console.log("Deleted Todo");
    }
    //ask again for new input
    var input = prompt("What would you like to do?");
}
prompt("OK, YOU QUIT THE APP");
