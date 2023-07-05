import React, { useState } from 'react'
import { addTodo } from '../redux/modules/todos';
import { useDispatch } from 'react-redux';

function Inputs() {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const dispatch = useDispatch();
    
  return (
    <div>
        <div>
            제목 : <input
                type='text'
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            ></input>
            내용 : <input
                type='text'
                value={body}
                onChange={(event) => setBody(event.target.value)}
            ></input>
        </div>
        <div>
            <button onClick={() => {
                dispatch(addTodo({title, body}));
                setTitle('');
                setBody('');
            }}>추가하기</button>
        </div>
    </div>
  )
}

export default Inputs