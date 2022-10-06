const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");
console.log(empties);

//emptiesの要素を一つずつ取り出す
for(const empty of empties){
    empty.addEventListener("dragover", dragOver);
    //ドラッグした要素が入ってきた時
    empty.addEventListener("dragenter", dragEnter);
    empty.addEventListener("dragleave", dragLeave);
    empty.addEventListener("drop", dragDrop);
}

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

function dragStart() {
    console.log("start");
    fill.classList.add("hold");
    setTimeout(() => {
        fill.classList.add("invisible");
    }, 0);
}

function dragEnd() {
    console.log("end");
    fill.className = "fill";
}

function dragOver(e) {
    e.preventDefault();
    console.log("over");
}

function dragEnter() {
    console.log("enter");
}

function dragLeave() {
    console.log("leave");
}

function dragDrop() {
    this.className = "empty";
    this.appendChild(fill);
}