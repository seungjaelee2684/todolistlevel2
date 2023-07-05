import React from 'react'
import { deleteTodo, toggleStatusTodo } from '../redux/modules/todos';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Done() {

    const todos = useSelector((state) => {
        return state.todos;
    });

    const dispatch = useDispatch();

    return (
        <div>
            <h2>Done..! 🎉</h2>
            <div>
                {todos.map((item) =>
                    (item.isDone === true)
                        ? <div key={item.id}>
                            <Link to={`/${item.id}`} key={item.id}>상세보기</Link>
                            <br />
                            {item.title}
                            <br />
                            {item.body}
                            <br />
                            <button onClick={() => {
                                dispatch(deleteTodo(item.id))
                            }}
                            >
                                삭제하기                               
                            </button>
                            <button onClick={() => {
                                dispatch(toggleStatusTodo(item.id))
                            }}
                            >
                                취소
                            </button>
                        </div>
                        : null
                )}
            </div>
        </div>
    )
}

export default Done
