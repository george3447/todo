(function () {

    var todoListComponent = {
        bindings: {
            todos: '<',
            onRemoveTodoItem: '&',
            onEditTodoItem: '&',
            onCompleteTodoItem: '&'
        },
        templateUrl: 'app/todo/todo-list/todo-list.component.html'
    }

    angular.module('todoList')
        .component('todoList', todoListComponent);

})();