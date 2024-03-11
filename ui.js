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
    info.style.display = ""
    get_body(this).draw_info()
}

function deselect() {
    let selected = document.getElementsByClassName("selected")
    for (const item of selected) {
        item.classList.remove("selected")
    }

    document.getElementById("info-view").style.display = "none"
}

function setup_ui() {
    deselect()

    document.getElementById("system-view").addEventListener("click", function(e) {
        if (e.target === e.currentTarget) {
            deselect()
        }
    })
    document.getElementById("info-view-back-button").addEventListener("click", function(e) {
        deselect()
    })
}
