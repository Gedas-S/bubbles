initial_state = JSON.stringify({
    systems: {
        parp: {
            bodies: {
                parp: new Star({
                    name: "parp",
                    system: "parp",
                    size: 10,
                    color: "255,255,0",
                }),
                "parp 1": new Planet({
                    name: "parp 1",
                    system: "parp",
                    x: 30,
                    y: 50,
                    size: 4,
                    color: "#9C2E35",
                }),
                "parp 2": new Planet({
                    name: "parp 2",
                    system: "parp",
                    x: 70,
                    y: 50,
                    size: 4,
                    color: "rgb(255,40,60)",
                }),
                "parp 3": new Planet({
                    name: "parp 3",
                    system: "parp",
                    x: 50,
                    y: 70,
                    size: 5,
                    color: "rgb(50,90,255)",
                }),
                "parp 4": new Planet({
                    name: "parp 4",
                    system: "parp",
                    x: 50,
                    y: 30,
                    size: 5,
                    color: "rgb(120,255,0)",
                }),
                "parp 5": new Planet({
                    name: "parp 5",
                    system: "parp",
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
    const parsable_types = load_body_types()
    const parser = (key, value) => {
        if (parsable_types[value.type] !== undefined) {
            return new parsable_types[value.type](value)
        }
        return value
    }

    return JSON.parse(initial_state, parser)
}
