const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")
const inputDate = document.getElementById("input-date")
const deleteAll = document.getElementById("delete-all")
const filterButton = document.getElementById("filter-button")

function addTask(){
    if (inputBox.value === '' && inputDate.value === '') {
        alert("Nama tugas dan tanggal tidak boleh kosong!")
    }
    else if (inputBox.value === '') {
        alert("Nama tugas tidak boleh kosong!")
    }

    else if (inputDate.value === '') {
        alert("Tanggal tidak boleh kosong!")
    }
    else {
        let li_name = document.createElement("li")
        li_name.innerHTML = `${inputBox.value} — ${inputDate.value}`;
        listContainer.appendChild(li_name)

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li_name.appendChild(span)

        inputBox.value = "";
        inputDate.value = "";

    }
}

listContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI" | "P"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}, false);

deleteAll.addEventListener("click", function() {
    listContainer.innerHTML = "";
});

let isFiltering = false;

filterButton.addEventListener("click", function() {
    const tasks = listContainer.getElementsByTagName("li");
    isFiltering = !isFiltering;

    for (let task of tasks) {
        if (isFiltering) {
            if (task.classList.contains("checked")) {
                task.style.display = "none";
            } else {
                task.style.display = "list-item";
            }
        } else {
            task.style.display = "list-item";
        }
    }

    filterButton.textContent = isFiltering ? "Show All Task" : "Show Unfinished Task";
});

