function init() {
    self.game = {
        state: load_state(),
    }

    render_system(self.game.state.systems.parp)
    run_main_loop()
}

function run_main_loop() {
    game.main_loop = setInterval(main_loop, 16)
}

function main_loop() {

}
