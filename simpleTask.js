let taskManager = (function () {
    tasks = [];

    function addTask(myTask) {
        tasks.push(myTask);
    };

    function displayTasks() {
        for ( index of tasks) {
            console.log(index);
        };
    }

    return { addTask: addTask, displayTasks: displayTasks };


})();

taskManager.addTask(' Make a dentist appointment');

taskManager.addTask(' Finish the Laundry ');

taskManager.addTask(' Buy some groceries');

taskManager.displayTasks();