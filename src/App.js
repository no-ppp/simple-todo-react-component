import { CreateTitle } from './CreateTitle'
import { Todo } from './Todo.jsx'
import { useReducer } from 'react'

const ACTIONS = {
    ADD_TODO: 'ADD_TODO',
    TOGGLE_TODO: 'TOGGLE_TODO',
    DELETE: 'DELETE'
}

function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            const createdAt = new Date()
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: Date.now(),
                        text: action.payload,
                        completed: false,
                        createdAt: createdAt
                    }
                ]
            }
        case ACTIONS.TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
                )
            }
        case ACTIONS.DELETE:
            return {
                ...state,
                todos: state.todos.filter(todo =>
                    todo.id !== action.payload)
            }
        default:
            return state
    }
}


function App() {
    const [state, dispatch] = useReducer(reducer, { todos: [] })

    const handleSubmit = (event, newTodo) => {
        event.preventDefault()
        if (newTodo.trim()) {
            dispatch({ type: ACTIONS.ADD_TODO, payload: newTodo })
        }
    }

    return (
        <div>
            <CreateTitle handleSubmit={handleSubmit} />
            {state.todos.map(todo => {
                const createdAt = new Date(todo.createdAt)
                const dayMonth = createdAt.toLocaleDateString('pl-PL', { day: '2-digit', month: '2-digit' })
                const year = createdAt.getFullYear()

                return (
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        dayMonth={dayMonth}
                        year={year}
                        description={todo.text}
                        completed={todo.completed}
                        onToggle={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: todo.id })}
                        onDelete={() => dispatch({ type: ACTIONS.DELETE, payload: todo.id })}
                    />
                )
            })}
        </div>
    )
}

export default App