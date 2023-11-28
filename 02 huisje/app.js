class App
{
    runApplication()
    {
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");
        let x = canvas.getContext("2d");
        console.log(canvas)
        g.beginPath();
        g.strokeStyle = "black";
        //dak
        g.moveTo(30,10);
        g.lineTo(20,30);
        g.lineTo(60,40);
        g.lineTo(70,20);
        g.lineTo(30,10);
        
        //breede muur
        g.moveTo(20,30);
        g.lineTo(20,50);
        g.lineTo(60,60);
        g.lineTo(60,40);
        g.lineTo(20,30);
        
        //driehoek muur
        g.moveTo(60,40);
        g.lineTo(70,20);
        g.lineTo(80,30);
        g.lineTo(60,40);

        //smalle muur
        g.moveTo(60,60);
        g.lineTo(80,50);
        g.lineTo(80,30);
        g.lineTo(60,40);

        //raam
        g.moveTo(55,55);
        g.lineTo(55,45);
        g.lineTo(45,43);
        g.lineTo(45,53)
        g.closePath();
        g.stroke();
      

        
    }
}

let app = new App();
app.runApplication();
