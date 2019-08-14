import TodoList from './TodoList';
import withTodoListService from './withTodoListService';

export default withTodoListService(TodoList, 'tomorrow');