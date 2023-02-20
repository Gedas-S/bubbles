function load_body_types() {
    return {
        planet: Planet,
        star: Star,
    }
}


class Planet {
    type = "planet"

    constructor({system, name, x, y, size, color}) {
        this.system = system
        this.name = name
        this.x = x
        this.y = y
        this.size = size
        this.color = color
    }

    draw() {
        const elem = document.createElement("div")
        elem.dataset.system = this.system;
        elem.dataset.name = this.name;

        elem.classList.add("planet")
        elem.style.top = this.y + "%"
        elem.style.left = this.x + "%"
        elem.style.width = elem.style.height = this.size + "em"
        elem.style.backgroundColor = this.color

        const shadow = document.createElement("div")
        shadow.classList.add("shadow")
        const orbit_angle = Math.atan2(50-this.y, this.x-50)
        const shadow_size = 4 * -Math.sin(orbit_angle) + 16
        const gradient_x = Math.cos(orbit_angle) * -shadow_size + 50
        const gradient_y = Math.sin(orbit_angle) * shadow_size + 50
        shadow.style.backgroundImage = (
            "radial-gradient(circle "+0.7*this.size+"em at "+gradient_x+"% "+gradient_y+"%, " +
            "#00000000, #00000000 75%, #000000BF 85%)"
        )
        elem.appendChild(shadow)

        elem.addEventListener("click", select_body)

        return elem
    }

    draw_info() {
        const elem = document.createElement("p")
        elem.innerHTML = this.name
        return [elem]
    }
}

class Star {
    type = "star"

    constructor({system, name, size, color}) {
        this.system = system
        this.name = name
        this.size = size
        this.color = color
    }

    draw() {
        const elem = document.createElement("div")
        elem.dataset.system = this.system;
        elem.dataset.name = this.name;

        elem.classList.add("star")
        elem.style.width = elem.style.height = this.size + "em"
        const rgb = this.color
        elem.style.backgroundImage = (
            "radial-gradient(farthest-side, " +
            "rgb(" + rgb + "), rgb(" + rgb + ") 60%, rgba(" + rgb +",0.7) 61%, rgba(" + rgb + ",0))"
        )
        elem.addEventListener("click", select_body)

        return elem
    }

    draw_info() {
        const elem = document.createElement("p")
        elem.innerHTML = this.name
        return [elem]
    }
}
