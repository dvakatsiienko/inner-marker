import { action, computed, makeObservable, observable } from 'mobx';
import { observer } from 'mobx-react-lite';

export class ClassTodo {
    id = Math.random();
    title = '';
    finished = false;

    constructor(title: string) {
        makeObservable(this, {
            title: observable,
            finished: observable,
            toggle: action,
        });
        this.title = title;
    }

    toggle() {
        this.finished = !this.finished;
    }
}

class ClassTodoList {
    todoList: ClassTodo[] = [];

    get unfinishedTodoCount() {
        return this.todoList.filter((todo) => !todo.finished).length;
    }

    constructor(todos: ClassTodo[]) {
        makeObservable(this, {
            todoList: observable,
            unfinishedTodoCount: computed,
        });
        this.todoList = todos;
    }
}

const TodoListView = observer(({ todoList }: { todoList: ClassTodoList }) => {
    return (
        <div className='[grid-area:content] flex flex-col gap-4'>
            <ul className='flex flex-col gap-2'>
                {todoList.todoList.map((todo) => (
                    <TodoView todo={todo} key={todo.id} />
                ))}
            </ul>
            Tasks left: {todoList.unfinishedTodoCount}
        </div>
    );
});

const TodoView = observer(({ todo }: { todo: ClassTodo }) => (
    <li className='flex items-center gap-2'>
        <label className='flex items-center gap-2 cursor-pointer select-none'>
            <input type='checkbox' checked={todo.finished} onClick={() => todo.toggle()} />
            {todo.title}
        </label>
    </li>
));

const todoListStore = new ClassTodoList([
    new ClassTodo('Get Coffee'),
    new ClassTodo('Write simpler code'),
]);

export const TodoList1 = <TodoListView todoList={todoListStore} />;
