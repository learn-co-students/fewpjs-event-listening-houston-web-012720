function addingEventListener() {
    const input = document.querySelector("#input")
    input.addEventListener("click", e => {
        alert("I was clicked!")
    })
}

addingEventListener()