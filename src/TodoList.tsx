import { observer } from 'mobx-react-lite';
import type { ClassTodo } from './mobx-1.tsx';

export const TodoList = observer(({ todoList }: { todoList: ClassTodo[] }) => {
    console.log(todoList);
    return (
        <div className='[grid-area:content] flex flex-col gap-4'>
            <ul className='flex flex-col gap-2'>
                {todoList.map((todo) => (
                    <Todo todo={todo} key={todo.id} />
                ))}
            </ul>
            Tasks left: {todoList.filter((todo) => !todo.finished).length}
        </div>
    );
});

export const Todo = observer(({ todo }: { todo: ClassTodo }) => (
    <li className='flex items-center gap-2'>
        <label className='flex items-center gap-2 cursor-pointer select-none'>
            <input type='checkbox' checked={todo.finished} onChange={() => todo.toggle()} />
            {todo.title}
        </label>
    </li>
));
