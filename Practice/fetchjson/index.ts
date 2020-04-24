import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const todo = response.data as Todo;
  const { id, title, completed } = todo;
  logTodo(todo);
});

const logTodo = ({ id, title }: { id: number; title: string }) => {
  console.log(`
    The todo with ID: ${id} has a title of ${title}
  `);
};
