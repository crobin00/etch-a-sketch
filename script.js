function grid(size = 16) {
    let container = document.querySelector(".container");
    for(let i = 1; i <= size; i++) {
        let div = document.createElement("div");
        container.appendChild(div);
        div.className = "rows";
        div.id = "row" + i;
        for(let j = 1; j <= size; j++) {
            let div2 = document.createElement("div");
            div.appendChild(div2);
            div2.className = "cols";
        }   
    }
    return container;
}

function hoverDraw() {
    let colomns = document.querySelectorAll(".cols");
    reverse++;
    colomns.forEach(cols => {
        cols.addEventListener("mouseover", e => {
            if(reverse % 2 == 0) {
                e.target.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
            } else {
                e.target.style.backgroundColor = "black";
            }

            // reset the color after short delay
            /* setTimeout(function () {
                e.target.style.backgroundColor = "";
            }, 1000); */
        })
    })
}

function reset() {
    let button = document.querySelector("button");
    let size;
    button.addEventListener("click", e => {
        size = prompt("Enter size of new sketch");
        while(size > 100 || size < 1) {
            alert("Please select a size between 1 and 100");
            size = prompt("Enter size of new sketch");
        }
        document.querySelector(".container").remove();
        let container = document.createElement("div");
        document.querySelector(".center").appendChild(container);
        container.className = "container";
        grid(size);
        hoverDraw();
        
    })
}

function randomColor() {
    let hexValue = Math.floor(Math.random() * 256);
    return hexValue;
}

let reverse = 0;
grid();
hoverDraw();
reset();







