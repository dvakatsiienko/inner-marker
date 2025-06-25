import { action, computed, type IComputedValue, observable } from 'mobx';

export const getTodoStore = (id: number, title: string) => {
    const todoStore = observable({
        id,
        title,
        finished: false,
        toggle: action(() => {
            todoStore.finished = !todoStore.finished;
        }),
    });

    return todoStore;
};

export const todoListStore3 = observable<{
    todoList: ReturnType<typeof getTodoStore>[];
    unfinishedTodoCount: IComputedValue<number>;
}>({
    todoList: [getTodoStore(1, 'Get Coffee'), getTodoStore(2, 'Write simpler code')],
    unfinishedTodoCount: computed((): number => {
        return todoListStore3.todoList.filter((todo) => !todo.finished).length;
    }),
});
