(function() {

    TodoComponentController.$inject = ['todoService'];

    function TodoComponentController(todoService) {
        var ctrl = this;

        ctrl.$onInit = function() {
            ctrl.saveTodo = saveTodo;
            ctrl.removeTodo = removeTodo;
            ctrl.editTodo = editTodo;
            ctrl.completeTodo = completeTodo;
            ctrl.clearTodo = clearTodo;
            ctrl.todos = todoService.get();
        }

        function saveTodo(todo) {
            if (!todo.id) {
                todo.id = todoService.getRandomId(1, 1000);
                ctrl.todos.push(todo);
            } else {
                update(todo);
            }
        }

        function removeTodo(todo) {
            if (ctrl.todo && (ctrl.todo.id === todo.id)) {
                clearTodo();
            }
            var removableItemIndex = ctrl.todos.indexOf(todo);
            if (removableItemIndex > -1) {
                ctrl.todos.splice(ctrl.todos.indexOf(todo), 1);
            }
        }

        function completeTodo(todo) {
            todo.isCompleted = !todo.isCompleted;
            update(todo);
        }

        function editTodo(todo) {
            ctrl.todo = todo;
        }

        function clearTodo() {
            ctrl.todo = undefined;
        }

        function update(todo) {
            for (var todoIndex = 0; todoIndex < ctrl.todos.length; todoIndex++) {
                if (ctrl.todos[todoIndex].id === todo.id) {
                    ctrl.todos[todoIndex] = todo;
                    todoIndex = ctrl.todos.length;
                }
            }
        }
    }

    var todoComponent = {
        templateUrl: 'app/todo/todo.component.html',
        controller: TodoComponentController
    };

    angular.module('todo')
        .component('todo', todoComponent);
})();