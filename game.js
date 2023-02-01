function init() {
    self.game = {}
    const main = document.getElementById("main")
    main.appendChild(make_star(10, "255,255,0"))
    main.appendChild(make_planet(30, 50, 4, "#9C2E35"))
    main.appendChild(make_planet(70, 50, 4, "rgb(255,40,60)"))
    main.appendChild(make_planet(50, 70, 5, "rgb(50,90,255)"))
    main.appendChild(make_planet(50, 30, 5, "rgb(120,255,0)"))
    main.appendChild(make_planet(20, 20, 6, "rgb(120,255,190)"))

    run_main_loop()
}

function run_main_loop() {
    game.main_loop = setInterval(main_loop, 16)
}

function main_loop() {

}
