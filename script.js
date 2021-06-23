function grid() {
    let container = document.querySelector(".container");
    for(let i = 1; i <= 16; i++) {
        let div = document.createElement("div");
        container.appendChild(div);
        div.className = "rows";
        div.id = "row" + i;
        for(let j = 1; j <= 16; j++) {
            let div2 = document.createElement("div");
            div.appendChild(div2);
            div2.className = "cols";
        }   
    }
    return container;
}


grid();
let colomns = document.querySelectorAll(".cols");
colomns.forEach(cols => {
    cols.addEventListener("mouseover", e => {
        e.target.style.backgroundColor = "black";

        // reset the color after short delay
        setTimeout(function () {
            e.target.style.backgroundColor = "";
        }, 1000);
    })
})





