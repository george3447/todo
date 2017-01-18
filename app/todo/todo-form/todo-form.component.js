(function () {

    function TodoFormController() {
        var ctrl = this;

        ctrl.$onInit = function () {
            ctrl.saveTodo = saveTodo;
            ctrl.clearTodo = clearTodo;
        }


        function saveTodo() {
            if (ctrl.todo && ctrl.todo.desc) {
                ctrl.onSaveTodoItem({
                    todoFormObj: angular.copy(ctrl.todo)
                });
                clearTodo();
            }
        }

        function clearTodo() {
            ctrl.todo = undefined;
        }
    }

    var todoFormComponent = {
        bindings: {
            todo: '<',
            onSaveTodoItem: '&'
        },
        controller: TodoFormController,
        templateUrl: 'app/todo/todo-form/todo-form.component.html'
    }

    angular.module('todoForm')
        .component('todoForm', todoFormComponent);
})();