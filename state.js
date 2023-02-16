function load_state() {
    return {
        systems: {
            parp: {
                bodies: {
                    parp: {
                        type: "star",
                        size: 10,
                        color: "255,255,0",
                    },
                    "parp 1": {
                        type: "planet",
                        x: 30,
                        y: 50,
                        size: 4,
                        color: "#9C2E35",
                    },
                    "parp 2": {
                        type: "planet",
                        x: 70,
                        y: 50,
                        size: 4,
                        color: "rgb(255,40,60)",
                    },
                    "parp 3": {
                        type: "planet",
                        x: 50,
                        y: 70,
                        size: 5,
                        color: "rgb(50,90,255)",
                    },
                    "parp 4": {
                        type: "planet",
                        x: 50,
                        y: 30,
                        size: 5,
                        color: "rgb(120,255,0)",
                    },
                    "parp 5": {
                        type: "planet",
                        x: 20,
                        y: 20,
                        size: 6,
                        color: "rgb(120,255,190)",
                    },
                }
            }
        }
    }
}
