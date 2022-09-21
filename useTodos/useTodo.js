
import { todoReducer } from "./todoReducer";
import { useEffect,useReducer } from "react";

const initialState = [
    // {
    //     id: new Date().getTime(),
    //     description: 'Recolectar la piedra del alma',
    //     done: false
    // },
    // {
    //     id: new Date().getTime() * 3,
    //     description: 'Recolectar la piedra del poder',
    //     done: false
    // }
    
    ];


    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || [];
    }


export const useTodo = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init)

    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(todos) );
    }, [todos]);
    


    const onAddTodo = (newTodo) => {
        const action = {
            type: 'Add Todo',
            payload: newTodo
        }

        console.log(action);
        dispatch(action);
    }

    const onDeleteTodo = (id) => {
        const action = {
            type: 'Delete Todo',
            payload: id
        }

        console.log(action);
        dispatch(action);
    }

    const handleToggleTodo = (id) => {
        const action = {
            type: 'Toggle Todo',
            payload: id
        }

        console.log(action);
        dispatch(action);
    }



    return {todos, handleToggleTodo, onAddTodo, onDeleteTodo, todosCount: todos.length, pendingTodosCount: todos.filter(todo => !todo.done).length};

}