initial_state = JSON.stringify({
    systems: {
        parp: {
            bodies: {
                parp: new Star({
                    size: 10,
                    color: "255,255,0",
                }),
                "parp 1": new Planet({
                    x: 30,
                    y: 50,
                    size: 4,
                    color: "#9C2E35",
                }),
                "parp 2": new Planet({
                    x: 70,
                    y: 50,
                    size: 4,
                    color: "rgb(255,40,60)",
                }),
                "parp 3": new Planet({
                    x: 50,
                    y: 70,
                    size: 5,
                    color: "rgb(50,90,255)",
                }),
                "parp 4": new Planet({
                    x: 50,
                    y: 30,
                    size: 5,
                    color: "rgb(120,255,0)",
                }),
                "parp 5": new Planet({
                    x: 20,
                    y: 20,
                    size: 6,
                    color: "rgb(120,255,190)",
                }),
            }
        }
    }
})

function load_state() {
    let state = JSON.parse(initial_state)
    const body_types = load_body_types()
    for (let system of Object.values(state.systems)) {
        for (let [name, data] of Object.entries(system.bodies)) {
            system.bodies[name] = new body_types[data.type](data)
        }
    }
    return state
}
