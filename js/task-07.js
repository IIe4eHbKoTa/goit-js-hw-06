const textControl = document.querySelector("#font-size-control");
const textElem = document.querySelector("#text")

textControl.addEventListener("input", () => {
    const fontSize = textControl.value

    textElem.style.fontSize = fontSize + "px"
})

