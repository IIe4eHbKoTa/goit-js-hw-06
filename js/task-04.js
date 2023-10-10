const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const Value = document.getElementById("value");

let counterValue = 0;

const updateValue = () => {
    Value.textContent = counterValue
}

const increment = () => {
    counterValue +=1;
    updateValue();
}

const decrement = () => {
    counterValue -=1;
    updateValue();
}

incrementBtn.addEventListener("click", increment)
decrementBtn.addEventListener("click", decrement)

updateValue();
