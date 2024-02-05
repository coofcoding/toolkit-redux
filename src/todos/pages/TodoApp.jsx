import { useState } from "react";
import { useGetTodoByIdQuery, useGetTodosQuery } from "../../store/apis/todosApi"

export const TodoApp = () => {

    const [todoId, setTodoId] = useState(1);
    const { data: todo, isLoading, id } = useGetTodoByIdQuery(todoId);
    
    const prevTodo = () => {
        if ( todoId === 1 ) return;
        setTodoId( todoId - 1 );
    }    
    const nexTodo = () => {
        setTodoId( todoId + 1 );
    }

    return (
        <>
            <h1>Todos - RTK Query</h1>

            {
                (isLoading)
                    ? <span className="loading-alert">Loading...</span>
                    : ''
            }

            <pre cols>{JSON.stringify(todo)}</pre>

            <div className="buttons">
                <button  onClick={ prevTodo }>
                    Prev
                </button>
                <button onClick={ nexTodo }>
                    Next
                </button>
            </div>

            {/* <ul>
                {
                    todos.map((todo) => (
                        <li key={todo.id} className={ todo.completed ? 'success' : 'fail' }>
                            <span>{todo.title}</span>
                            <span className="state">{todo.completed ? 'done!' : 'pending...'}</span>
                        </li>
                    ))
                }
            </ul> */}
        </>
    )
}
