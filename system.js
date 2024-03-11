function render_system(system) {
    const view = document.getElementById("system-view")
    view.replaceChildren(...draw_system(system))
}

function draw_system(system) {
    bodies = []
    for (let data of Object.values(system.bodies)) {
        switch (data.type) {
            case "star":
                bodies.push((new Star(data)).draw())
            case "planet":
                bodies.push((new Planet(data)).draw())
        }
    }
    return bodies
}
