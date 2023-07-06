import React from 'react'
import { deleteTodo, toggleStatusTodo } from '../redux/modules/todos';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

function List() {

    const todos = useSelector((state) => {
        return state.todos;
    });

    console.log('todos -> ', todos);

    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <div><h2>Working.. 🔥</h2></div>
                <ListBox>
                    {todos.map((item) =>
                        (item.isDone === false)
                            ? <Box key={item.id}>
                                <LinkBox>
                                    <Link
                                        to={`/${item.id}`}
                                        key={item.id}
                                    >
                                        상세보기
                                    </Link>
                                </LinkBox>
                                <br />
                                <TitleBox>{item.title}</TitleBox>
                                <br />
                                {item.body}
                                <br />
                                <DeleteButton onClick={() => {
                                    dispatch(deleteTodo(item.id))
                                }}
                                >
                                    삭제하기
                                </DeleteButton>
                                <ChangeButton onClick={() => {
                                    dispatch(toggleStatusTodo(item.id))
                                }}
                                >
                                    완료
                                </ChangeButton>
                            </Box>
                            : null
                    )}
                </ListBox>
            </div>
            <br />
            <div>
                <h2>Done..! 🎉</h2>
                <ListBox>
                    {todos.map((item) =>
                        (item.isDone === true)
                            ? <Box key={item.id}>
                                <LinkBox>
                                    <Link
                                        to={`/${item.id}`}
                                        key={item.id}
                                    >
                                        상세보기
                                    </Link>
                                </LinkBox>
                                <br />
                                <TitleBox>{item.title}</TitleBox>
                                <br />
                                {item.body}
                                <br />
                                <DeleteButton onClick={() => {
                                    dispatch(deleteTodo(item.id))
                                }}
                                >
                                    삭제하기
                                </DeleteButton>
                                <ChangeButton onClick={() => {
                                    dispatch(toggleStatusTodo(item.id))
                                }}
                                >
                                    취소
                                </ChangeButton>
                            </Box>
                            : null
                    )}
                </ListBox>
            </div>
        </div>
    )
}

const ListBox = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
`;

const Box = styled.div`
    width: 230px;
    height: 180px;
    display: inline-block;
    padding: 0px 20px 20px 20px;
    margin: 20px;
    border: 2px solid #ffa4bb;
    border-radius: 10px;
`;

const TitleBox = styled.div`
    margin-bottom: 4px;
    font-size: 150%;
    font-weight: bolder;
`;

const LinkBox = styled.div`
    font-size: 80%;
    margin-top: 10px;
`;

const DeleteButton = styled.button`
    width: 100px;
    height: 30px;
    border: 2px solid red;
    background-color: white;
    border-radius: 5px;
    margin: 20px 10px 5px 10px;
    box-shadow: 1px 1px 5px 1px pink;
`;

const ChangeButton = styled.button`
    width: 100px;
    height: 30px;
    border: 2px solid green;
    background-color: white;
    border-radius: 5px;
    margin: 20px 10px 5px 0px;
    box-shadow: 1px 1px 5px 1px #c2ffeb;
`;

export default List