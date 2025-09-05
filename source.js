function onHover(square){
    square.style.background = "black";
}
const container = document.querySelector("#container")
for (let j=0; j<16; j++){
    const row = document.createElement("divRow");
    row.classList.add("row");

    container.appendChild(row);

    for (let i=0; i<16; i++){
        const square = document.createElement("div");
        square.classList.add("square");
        square.addEventListener("mouseenter", () => {
            onHover(square);
        })
        row.appendChild(square);
    }
}