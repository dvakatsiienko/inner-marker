import { makeAutoObservable } from 'mobx';

// makeAutoObservable does not work with sub classes

export class ClassTodo {
    id = Math.random();
    title = '';
    finished = false;

    constructor(title: string) {
        makeAutoObservable(this);
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
        makeAutoObservable(this);
        this.todoList = todos;
    }
}

export const todoListStore2 = new ClassTodoList([
    new ClassTodo('Get Coffee'),
    new ClassTodo('Write simpler code'),
]);
