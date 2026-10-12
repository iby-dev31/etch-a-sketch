app = document.querySelector("#app");
input = document.querySelector("#input");
document.querySelector("#create").onclick = () => create(input.value);

function create(input_numer) {
    app.innerHTML = ``;
    if (input_numer >= 3 && input_numer <= 100) {
        for (let i = 0; i < input_numer * input_numer; i++) {
            div = document.createElement("div");
            console.log(Math.trunc(500 / input_numer))
            div.style.width = `${Math.trunc(500 / input_numer)}px`;
            div.style.height = `${Math.trunc(500 / input_numer)}px`;
            div.classList.add("pixel");
            app.appendChild(div);
        }
        app.style.width = `${Math.trunc(500 / input_numer) * input_numer}px`;
        console.log(Math.trunc(500 / input_numer) * input_numer);
    } else if (input_numer > 100) {
        alert("Max: 100px");
    } else {
        alert("Min: 3px")
    }

    document.querySelectorAll(".pixel").forEach(pixel => {
        pixel.addEventListener("pointermove", (event) => {
            if (event.buttons === 1) {
                pixel.style.background = "#fff";
            }
        });
        pixel.addEventListener('dragstart', (event) => {
            event.preventDefault();
        });
    });
}