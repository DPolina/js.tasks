(function() {
  console.log('Welcome');
  function ToDo() {
    this.newTaskName = '';
    this.todoTasks = [];
    this.completedTasks = [];
    this.addTask = function(taskName) {
      this.todoTasks.push(taskName);
    };
    this.completeTask = function(taskIdx) {
      const task = this.todoTasks[taskIdx];
      this.todoTasks.splice(taskIdx, 1);
      this.completedTasks.push(task);
    };
    this.removeTask = function(task) {

    };
    this.undoTask = function(task) {

    };
    this.clearTasks = function() {
      this.todoTasks.length = 0;
    }
  }
  

  function getEl(id) {
    return document.getElementById(id);
  }
  function getElValue(id) {
    return getEl(id).value;
  }
  function setElValue(id, newValue) {
    getEl(id).value = newValue;
  }
  function setFocus(id) {
    getEl(id).focus();
  }
  getEl('btn-add').addEventListener('click', function(event) {
    event.preventDefault();
    const newTask = getElValue('input-new-task');
    app.addTask(newTask);
    setElValue('input-new-task', '');
    setFocus('input-new-task');
    console.log(app);
  })
  const app = new ToDo();
  setFocus('input-new-task');
  
  // app.addTask('Buy cabbage');
  // app.addTask('Buy milk');
  // app.addTask('Do homework');
  // app.completeTask(2);
  // console.log(app);

})();

