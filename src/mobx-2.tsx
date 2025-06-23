import { action, computed, type IComputedValue, makeObservable, observable } from 'mobx';
import { observer } from 'mobx-react-lite';

const todoStore = observable({
    id: 1,
    title: 'Get Coffee',
    finished: false,
    toggle: action(() => {
        todoStore.finished = !todoStore.finished;
    }),
});

const todoListStore = observable<{
    todos: (typeof todoStore)[];
    unfinishedTodoCount: IComputedValue<number>;
}>({
    todos: [todoStore, todoStore],
    unfinishedTodoCount: computed((): number => {
        return todoListStore.todos.filter((todo) => !todo.finished).length;
    }),
});

const TodoListView = observer(({ todoList }: { todoList: typeof todoListStore }) => {
    return (
        <div className='[grid-area:content] flex flex-col gap-4'>
            <ul className='flex flex-col gap-2'>
                {todoList.todos.map((todo) => (
                    <TodoView todo={todo} key={todo.id} />
                ))}
            </ul>
            Tasks left: {todoList.unfinishedTodoCount.get()}
        </div>
    );
});

const TodoView = observer(({ todo }: { todo: typeof todoStore }) => (
    <li className='flex items-center gap-2'>
        <label className='flex items-center gap-2 cursor-pointer select-none'>
            <input type='checkbox' checked={todo.finished} onClick={() => todo.toggle()} />
            {todo.title}
        </label>
    </li>
));

export const TodoList2 = <TodoListView todoList={todoListStore} />;
