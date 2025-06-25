import { action, computed, makeObservable, observable } from 'mobx';

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

export class ClassTodoList {
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

export const todoListStore1 = new ClassTodoList([
    new ClassTodo('Get Coffee'),
    new ClassTodo('Write simpler code'),
]);
