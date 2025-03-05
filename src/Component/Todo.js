import React,{useReducer} from 'react'

const initialtodo=[
    {
        id:1,
        title:"Task 1",
        complete:false,
    },
    {
        id:2,
        title:"Task 2",
        complete:false
    },
];

const reducer=(state,action)=>{

    switch(action.type){
        case "complete":
            return state.map((todo)=>{
                if(todo.id===action.id){
                    return {...todo,complete : !todo.complete}
                }
                else{
                    return todo;
                }
            });
        default:
            return state;

    }
}




function Todo() {
    
    const [todos,dispatch]=useReducer(reducer,initialtodo);

    const handlecomplete=(todo)=>{
        dispatch({type: "Complete" , id:todo.id});
    }
  return (
    <div>
        {todos.map((todo)=>(
              <div key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.complete}
                  onChange={() => handlecomplete(todo)}
                />
                {todo.title}
              </label>
            </div>
        ))}
    </div>
  );
}

export default Todo