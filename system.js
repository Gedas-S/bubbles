function render_system(system) {
    const view = document.getElementById("system-view")
    view.replaceChildren(...draw_system(system))
}

function draw_system(system) {
    bodies = []
    for (let [name, data] of Object.entries(system.bodies)) {
        if (data.type == "star") {
            bodies.push(draw_star(data))
        } else if (data.type == "planet") {
            bodies.push(draw_planet(data))
        }
    }
    console.log(bodies)
    return bodies
}
