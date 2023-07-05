import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Detail() {

  const { id } = useParams();

  const todos = useSelector((state) => {
    return state.todos
  });

  const todo = todos.filter((todo) => todo.id === id)[0];

  const navigate = useNavigate();

  return (
    <div>
      id : {todo.id}
      <button onClick={() => {
        navigate('/');
      }}>이전으로</button>
      {todo.title}
      {todo.body}
    </div>
  )
}

export default Detail