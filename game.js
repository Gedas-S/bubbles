function init() {
    self.game = {
        state: load_state(),
    }

    setup_ui()
    render_system(self.game.state.systems.parp)
    run_main_loop()
}

function run_main_loop() {
    requestAnimationFrame(main_loop)
}

function main_loop(delta) {
    
    requestAnimationFrame(main_loop)
}
