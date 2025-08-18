import { action, computed, type IComputedValue, observable } from 'mobx';

// make(Auto)Observable modifies object, does not proxies it

// observable clones object, creates a proxy
// proxy may me disabled by using { proxy: false }

export const getTodoStore = (id: number, title: string) => {
  const todoStore = observable({
    finished: false,
    id,
    title,
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
  todoList: [
    getTodoStore(1, 'Get Coffee'),
    getTodoStore(2, 'Write simpler code'),
  ],
  unfinishedTodoCount: computed((): number => {
    return todoListStore3.todoList.filter((todo) => !todo.finished).length;
  }),
});
