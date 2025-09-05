function onHover(square){
    square.style.background = "black";
    square.style.opacity = parseFloat(square.style.opacity) + 0.1;
}
function gridCreation(size){
    const container = document.querySelector("#container")
    for (let j=0; j<size; j++){
        const row = document.createElement("divRow");
        row.classList.add("row");

        container.appendChild(row);

        for (let i=0; i<size; i++){
            const square = document.createElement("div");
            square.classList.add("square");
            square.style.opacity = 0;
            square.addEventListener("mouseenter", () => {
                onHover(square);
            })
            row.appendChild(square);
        }
    }
}

function gridDeletion(){
    const container = document.querySelector("#container");

    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
}
gridCreation(16)
button = document.querySelector("#button")
button.addEventListener("click", () =>{
    let userSize = prompt("Choose a new NxN grid size (max 100):");
    if (userSize>0 && userSize<=100){
        gridDeletion()
        gridCreation(userSize)
    }
    else{
        alert("Please choose a size between 0 and 100")
    }
})