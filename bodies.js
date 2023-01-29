function make_planet(x, y, size, color) {
    const planet = document.createElement("div")
    planet.classList.add("planet")
    planet.style.top = y + "%"
    planet.style.left = x + "%"
    planet.style.width = planet.style.height = size + "em"
    planet.style.backgroundColor = color

    const shadow = document.createElement("div")
    shadow.classList.add("shadow")
    const orbit_angle = Math.atan2(50-y, x-50)
    const shadow_size = 4 * -Math.sin(orbit_angle) + 16
    const gradient_x = Math.cos(orbit_angle) * -shadow_size + 50
    const gradient_y = Math.sin(orbit_angle) * shadow_size + 50
    shadow.style.backgroundImage = (
        "radial-gradient(circle "+0.7*size+"em at "+gradient_x+"% "+gradient_y+"%, " +
        "#00000000, #00000000 75%, #000000BF 85%)"
    )
    planet.appendChild(shadow)

    planet.addEventListener("click", select_planet)

    return planet
}
