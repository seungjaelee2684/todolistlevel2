import React, { useState } from 'react'
import { addTodo } from '../redux/modules/todos';
import { useDispatch } from 'react-redux';
import { styled } from 'styled-components';

function Forms() {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const dispatch = useDispatch();

    return (
        <FormBox>
            <div>
                제목 : <InputBox
                    type='text'
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                ></InputBox>
                &nbsp;
                내용 : <InputBox
                    type='text'
                    value={body}
                    onChange={(event) => setBody(event.target.value)}
                ></InputBox>
            </div>
            <div>
                <AddBtn onClick={() => {
                    dispatch(addTodo({ title, body }));
                    setTitle('');
                    setBody('');
                }}>추가하기</AddBtn>
            </div>
        </FormBox>
    )
}

const FormBox = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #ffb1be;
    border-radius: 5px;
    padding: 25px;
    font-weight: bold;
    color: white;
    align-items: center;
`;

const InputBox = styled.input`
    height: 25px;
    border-radius: 5px;
    border: 3px solid #ffb1be;
`;

const AddBtn = styled.button`
    width: 100px;
    height: 30px;
    color: white;
    background-color: #ff80a0;
`;

export default Forms