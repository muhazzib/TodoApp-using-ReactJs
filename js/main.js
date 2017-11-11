
let react = document.getElementById("root");


let array = JSON.parse(localStorage.getItem("todo")) || [];


let add = () => {
    let newtodo = input.value;
    if(newtodo){
        array.push(newtodo)
        console.log("add", newtodo);
        input.value=""
        rendertodo()
    }

}
let deleteTodo = (todoindex) => {
    array.splice(todoindex, 1);
    rendertodo()
}

let editTodo = (todo, i) => {
    let editedvalue = prompt("Enter value to edit", todo);
    if (editedvalue) {
        array.splice(i, 1, editedvalue);
        rendertodo()
    }
}

let rendertodo = () => {
    localStorage.setItem("todo", JSON.stringify(array))
    ReactDOM.render(
        <div className="container maindiv">
                        <div className="row justify-content-md-center">
        <img src="../images/logo.svg" className="App-logo App"/>
</div>
<div className="row justify-content-md-center">
        <h4>First Todo App</h4>
</div>
            <div className="row justify-content-md-center">
            <input type="text" id="input" className="form-control custominputstyle"/>
            <button onClick={() => add()} className="btn btn-outline-info custombtn">Add</button>
          </div>

            <ul>
                {
                    array.map((todo, i) => {
                        return <li key={i}>{todo}
                            <button onClick={() => deleteTodo(i)} className="btn btn-info custombtn2">Delete</button>
                            <button onClick={() => editTodo(todo, i)} className="btn btn-info custombtn2">Edit</button>

                        </li>
                    })
                }
            </ul>
        </div>
        , react)
}
rendertodo()
//The above expression can also be used like this

