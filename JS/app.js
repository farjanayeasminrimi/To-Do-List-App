const taskInputField = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.querySelector(".taskList");

addTaskButton.addEventListener("click", function () {
  const taskName = taskInputField.value;
  const ul = document.createElement("ul");
  ul.classList.add("taskMenu");
  ul.innerHTML = `
   <li>
     <input class="radio-btn" type="radio">
     <span>${taskName}</span>
     <button class = "deleteBtn">&#10006</button>
   </li>
  `;
  taskList.append(ul);
  taskInputField.value = "";

  const radioBtn = document.getElementsByClassName("radio-btn");
  for (let radioButton of radioBtn) {
    radioButton.addEventListener("click", function () {
      const line = radioButton.parentNode.children[1];
      line.style.textDecoration = "line-through";
      line.style.textDecorationColor = "#7322a3";
    });
  }

  const deleteBtn = document.getElementsByClassName("deleteBtn");
  for (let deleteButton of deleteBtn) {
    deleteButton.addEventListener("click", function () {
      deleteButton.parentNode.remove();
    });
  }
});
