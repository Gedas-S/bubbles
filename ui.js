function select_planet() {
    let selected = document.getElementsByClassName("selected")
    for (const item of selected) {
        item.classList.remove("selected")
    }

    this.classList.add("selected")
}
