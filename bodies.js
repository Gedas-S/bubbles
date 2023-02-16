function draw_planet(data) {
    const planet = document.createElement("div")
    planet.classList.add("planet")
    planet.style.top = data.y + "%"
    planet.style.left = data.x + "%"
    planet.style.width = planet.style.height = data.size + "em"
    planet.style.backgroundColor = data.color

    const shadow = document.createElement("div")
    shadow.classList.add("shadow")
    const orbit_angle = Math.atan2(50-data.y, data.x-50)
    const shadow_size = 4 * -Math.sin(orbit_angle) + 16
    const gradient_x = Math.cos(orbit_angle) * -shadow_size + 50
    const gradient_y = Math.sin(orbit_angle) * shadow_size + 50
    shadow.style.backgroundImage = (
        "radial-gradient(circle "+0.7*data.size+"em at "+gradient_x+"% "+gradient_y+"%, " +
        "#00000000, #00000000 75%, #000000BF 85%)"
    )
    planet.appendChild(shadow)

    planet.addEventListener("click", select_generic)

    return planet
}

function draw_star(data) {
    const star = document.createElement("div")
    star.classList.add("star")
    star.style.width = star.style.height = data.size + "em"
    const rgb = data.color
    star.style.backgroundImage = (
        "radial-gradient(farthest-side, " +
        "rgb(" + rgb + "), rgb(" + rgb + ") 60%, rgba(" + rgb +",0.7) 61%, rgba(" + rgb + ",0))"
    )
    star.addEventListener("click", select_generic)

    return star
}
