import shortid from "shortid";

const INPUT = "INPUT";
const remove_BTN = "remove_BTN";
const Change_BTN = "Change_BTN";

export const addTodo = (payload) => {
	return {
		type: INPUT,
		payload: payload,
	}
};

export const deleteTodo = (payload) => {
	return {
		type: remove_BTN,
		payload: payload,
	}
};

export const toggleStatusTodo = (payload) => {
	return {
		type: Change_BTN,
		payload: payload,
	}
};

const initialState = [
	{
		id: shortid.generate(), // id는 모두 고유값이어야 합니다.
		title: "리액트 강의보기",
		body: "챕터 1부터 챕터 12까지 학습",
		isDone: false
	},
	{
		id: shortid.generate(), // id는 모두 고유값이어야 합니다.
		title: "점심 먹기",
		body: "점심 뭐먹지..?",
		isDone: false
	}
];

const todos = (state = initialState, action) => {
	switch (action.type) {
		case INPUT:
			return [
				...state,
				{
					id: shortid.generate(),
					title: action.payload.title,
					body: action.payload.body,
					isDone: false,
				}
			];
		case remove_BTN:
			return state.filter((todoItem) => todoItem.id !== action.payload);
		case Change_BTN:
			return state.map(todoItem => {
				if (todoItem.id === action.payload) {
					return {
						...todoItem,
						isDone: !todoItem.isDone,
					};
				}
				return todoItem;
			});
		default:
			return state;
	}
};

export default todos;