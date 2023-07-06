import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';

function Detail() {

  const { id } = useParams();

  const todos = useSelector((state) => {
    return state.todos
  });

  const todo = todos.filter((todo) => todo.id === id)[0];

  const navigate = useNavigate();

  return (
    <LayOut2>
      <LayOutBox>
        <FirstBox>
          <IdBox>id : {todo.id}</IdBox>
          <BackButton onClick={() => {
            navigate('/');
          }}
          >
            이전으로
          </BackButton>
        </FirstBox>
        <br />
        <TextBox>{todo.title}</TextBox>
        <br />
        {todo.body}
      </LayOutBox>
    </LayOut2>
  )
}

const LayOut2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const LayOutBox = styled.div`
  width: 500px;
  height: 300px;
  border: 1px solid;
  font-family: system-ui, serif;
  font-size: 150%;
  padding: 3rem;
  border-radius: 1rem;
`;

const FirstBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IdBox = styled.h4`
  font-size: 80%;
`;

const BackButton = styled.button`
  background-color: white;
  border: 1px solid;
  border-radius: 5px;
  width: 100px;
  height: 30px;
`;

const TextBox = styled.div`
  font-size: 150%;
  font-weight: bolder;
  margin-bottom: 20px;
`;

export default Detail