function get_body(elem) {
    return self.game.state.systems[elem.dataset.system].bodies[elem.dataset.name]
}

function select_body() {
    let selected = document.getElementsByClassName("selected")
    for (const item of selected) {
        item.classList.remove("selected")
    }
    this.classList.add("selected")

    const info = document.getElementById("info-view")
    info.style.display = "block"
    info.replaceChildren(...get_body(this).draw_info())
}
