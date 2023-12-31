function addToList(){
    const input = document.getElementById("input");
    const parentElement = document.getElementById("list-body");

    if(input.value === "")
    { 
        return;
    }
    //create html element
    const paragraph = document.createElement("p");
    //add + hide css
    paragraph.classList.add("task");
    paragraph.classList.toggle("task");
    //add event
    paragraph.addEventListener("click", markAsDone);
    //assign input text
    paragraph.innerHTML = input.value + ".";
    input.value = "";
    //display element
    parentElement.appendChild(paragraph);
}
//add enter <------ to add

function clearList()
{
    const parentElement = document.getElementById("list-body");

    while (parentElement.firstChild) {
        parentElement.removeChild(parentElement.firstChild);
      }
}

function markAsDone(){
    this.classList.toggle("task");
}
