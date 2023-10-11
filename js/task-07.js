const textControl = document.querySelector("#font-size-control");
const textElem = document.querySelector("#text")

textControl.value = 16

textControl.addEventListener("input", () => {
    const fontSize = textControl.value

    textElem.style.fontSize = fontSize + "px"
})

