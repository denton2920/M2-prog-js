class App {
    runApplication() {
        console.log("hello world!");
        let canvas = document.getElementById("canvasId");
        let random = Math.floor(Math.random() * 600)
        let g = canvas.getContext("2d");
        console.log(random)
        for (let i = 0; i < random; i++) {
            let x = Math.floor(Math.random() * 600)
            let y = Math.floor(Math.random() * 400)
            this.tekenCirkel(g, x, y)
        }
    }
    tekenCirkel(g, x, y) {
        g.beginPath();
        g.arc(x, y, 20, 0, Math.PI * 2);
        g.stroke();
        g.fill();
        g.closePath();
    }
}

let app = new App();
app.runApplication();





