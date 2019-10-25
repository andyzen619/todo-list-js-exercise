// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {

  const task = {
    title: title,
    description: description,
    complete: false,
    finsishTask: function completeTask() {
      this.complete = true;
    },
    logTaskState: function logTaskState() {
      const title = this.title;
      const complete = this.complete;
      console.log(`${title} has${complete ? " " : " not "}been completed`);
    }
  }

  return task;
}

// DRIVER CODE BELOW

let catLitter = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box"); // task 0
let laundry = newTask("Do Laundry", "😨"); // task 1
let tastList = [catLitter, laundry];

catLitter.logTaskState(); // Clean Cat Litter has not been completed
catLitter.finsishTask();
catLitter.logTaskState(); // Clean Cat Litter has been completed