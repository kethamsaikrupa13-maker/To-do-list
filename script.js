let unOrderedEl = document.getElementById("unordered-list");
let buttonEl = document.getElementById("addButton");


let todoList = [{ text: "Learn HTML", uniqueNo: 1 }, { text: "Learn CSS", uniqueNo: 2 }, { text: "Learn Javascript", uniqueNo: 3 }, { text: "Learn Python", uniqueNo: 4 }]
let todoCount = todoList.length;
function changeStatus(checkboxId, labelId) {
    let checkboxEl = document.getElementById(checkboxId);
    let labelEl = document.getElementById(labelId);
    if (checkboxEl.checked) {
        labelEl.classList.add("checked");
    }

    else {
        labelEl.classList.remove("checked");
    }

}
function onAddTodo() {

    let inputId = document.getElementById("inputId");
    let inputValue = inputId.value;

    let todoCountEl = todoCount + 1;
    let newTodo = {
        text: inputValue,
        uniqueNo: todoCountEl
    }

    createAndAppendTodo(newTodo);
    inputId.value = "";
}



buttonEl.onclick = function () {
    onAddTodo()
}



function createAndAppendTodo(eachItem) {
    let checkboxId = "checkbox" + eachItem.uniqueNo;
    let labelId = "label" + eachItem.uniqueNo;
    let todoId = "todo" + eachItem.uniqueNo;


    let listEl = document.createElement("li");
    listEl.classList.add("d-flex", "flex-row", "mb-2");
    listEl.id = todoId;
    unOrderedEl.appendChild(listEl);


    let inputEl = document.createElement("input");
    inputEl.type = "checkbox";
    inputEl.id = checkboxId;
    inputEl.classList.add("input1");
    inputEl.onclick = function () {

        changeStatus(checkboxId, labelId)

    }
    listEl.appendChild(inputEl);

    let containerEl = document.createElement("div");
    containerEl.classList.add("container1", "d-flex", "flex-row");
    listEl.appendChild(containerEl);

    let labelEl = document.createElement("label");
    labelEl.classList.add("label1");
    labelEl.setAttribute("for", checkboxId);
    labelEl.id = labelId;
    labelEl.textContent = eachItem.text;
    containerEl.appendChild(labelEl);

    let deleteContainerEl = document.createElement("div");
    deleteContainerEl.classList.add("delete-icon-container");
    containerEl.appendChild(deleteContainerEl);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("bi", "bi-trash-fill");
    deleteIcon.onclick = function () {
        listEl.remove()

    }
    deleteContainerEl.appendChild(deleteIcon);


}

for (let eachItem of todoList) {
    createAndAppendTodo(eachItem)
}

