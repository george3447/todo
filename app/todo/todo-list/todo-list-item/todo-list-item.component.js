(function () {

    function TodoListItemController() {

        var ctrl = this;

        ctrl.$onInit = function () {
            ctrl.editTodoItem = editTodoItem;
        }

        function editTodoItem() {
            ctrl.onEditTodoItem({
                todoListItemObj: angular.copy(ctrl.todo)
            });
        }
    }

    var todoListItemComponent = {
        bindings: {
            todo: '<',
            onRemoveTodoItem: '&',
            onEditTodoItem: '&',
            onCompleteTodoItem: '&'
        },
        controller: TodoListItemController,
        templateUrl: 'app/todo/todo-list/todo-list-item/todo-list-item.component.html'
    };

    angular.module('todoListItem')
        .component('todoListItem', todoListItemComponent);

})();