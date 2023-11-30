class App
{
    runApplication()
    {
        let canvas = document.getElementById("canvasId");
        let random = Math.random();
        let g = canvas.getContext("2d");
        let x = canvas.getContext("2d");
        console.log(canvas)
        g.beginPath();
        g.strokeStyle = "black";
        //dak
        g.strokeStyle = "black";
        g.fillStyle = "red"
        g.moveTo(30,10);
        g.lineTo(20,30);
        g.lineTo(60,40);
        g.lineTo(70,20);
        g.lineTo(30,10);
        g.stroke()
        g.fill()
        g.closePath();
         
        //breede muur
        g.beginPath();
        g.strokeStyle = "black";
        g.moveTo(20,30);
        g.lineTo(20,50);
        g.lineTo(60,60);
        g.lineTo(60,40);
        g.lineTo(20,30);
        g.stroke()
        g.closePath();
        
        //driehoek muur
        g.beginPath();
        g.strokeStyle = "black";
        g.moveTo(60,40);
        g.lineTo(70,20);
        g.lineTo(80,30);
        g.lineTo(60,40);
        g.stroke()
        g.closePath();

        //smalle muur
        g.beginPath();
        g.strokeStyle = "black";
        g.moveTo(60,60);
        g.lineTo(80,50);
        g.lineTo(80,30);
        g.lineTo(60,40);
        g.stroke()
        g.closePath();

        //raam
        g.beginPath();
        g.strokeStyle = "black";
        console.log(random)
        if(random < 0.5){
            g.fillStyle = "yellow"
        } else if(random > 0.5){
            g.fillStyle = "black"
        }
        g.moveTo(55,55);
        g.lineTo(55,45);
        g.lineTo(45,43);
        g.lineTo(45,53)
        g.closePath();
        g.stroke();
        g.fill()
        g.closePath();

        
    }
}

let app = new App();
app.runApplication();
