class App
{
    runApplication()
    {
       
    }
    tekenHuis(x,y){
        let canvas = document.getElementById("canvasId");
        let random = Math.random();
        let g = canvas.getContext("2d");
        console.log(canvas)
        //dak
        g.beginPath();
        g.strokeStyle = "black";
        g.strokeStyle = "black";
        g.fillStyle = "red"
        g.moveTo(30+x,10+y);
        g.lineTo(20+x,30+y);
        g.lineTo(60+x,40+y);
        g.lineTo(70+x,20+y);
        g.lineTo(30+x,10+y);
        g.stroke()
        g.fill()
        g.closePath();
         
        //breede muur
        g.beginPath();
        g.strokeStyle = "black";
        g.moveTo(20+x,30+y);
        g.lineTo(20+x,50+y);
        g.lineTo(60+x,60+y);
        g.lineTo(60+x,40+y);
        g.lineTo(20+x,30+y);
        g.stroke()
        g.closePath();
        
        //driehoek muur
        g.beginPath();
        g.strokeStyle = "black";
        g.moveTo(60+x,40+y);
        g.lineTo(70+x,20+y);
        g.lineTo(80+x,30+y);
        g.lineTo(60+x,40+y);
        g.stroke()
        g.closePath();

        //smalle muur
        g.beginPath();
        g.strokeStyle = "black";
        g.moveTo(60+x,60+y);
        g.lineTo(80+x,50+y);
        g.lineTo(80+x,30+y);
        g.lineTo(60+x,40+y);
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
        g.moveTo(55+x,55+y);
        g.lineTo(55+x,45+y);
        g.lineTo(45+x,43+y);
        g.lineTo(45+x,53+y)
        g.closePath();
        g.stroke();
        g.fill()
        g.closePath();  
    }

    tekenKerstboom(x,y)
    {
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");
        console.log(canvas)
        //driehoek
        g.beginPath();
        g.strokeStyle = "black";
        g.fillStyle = "green";
        g.moveTo(100+x,10+y);
        g.lineTo(120+x,70+y);
        g.lineTo(80+x,70+y);
        g.stroke()
        g.fill()
        g.closePath();

        //stam
        g.beginPath();
        g.strokeStyle = "black";
        g.fillStyle = "red";
        g.moveTo(105+x,70+y);
        g.lineTo(95+x,70+x);
        g.lineTo(95+x,80+y);
        g.lineTo(105+x,80+y);
        g.lineTo(105+x,70+y);
        g.stroke();
        g.fill();
        g.closePath();

        
        g.fillStyle = "yellow";

            g.beginPath();
            g.arc(100+x,10+y,5 ,0,Math.PI*2);
            g.stroke();
            g.fill();
            g.closePath();
        

        //kerst bal
        function kerstbal(x,y)
        {
            g.fillStyle = "blue";

            g.beginPath();
            g.arc(100+x,20+y,2 ,0,Math.PI*2);
            g.stroke();
            g.fill();
            g.closePath();
        }
        kerstbal(1+x,5+y);
        kerstbal(-2+x,11+y);
        kerstbal(4+x,11+y);
        kerstbal(-5+x,17+y);
        kerstbal(0+x,17+y);
        kerstbal(5+x,17+y);
        kerstbal(-8+x,24+y);
        kerstbal(-2+x,24+y);
        kerstbal(3+x,24+y);
        kerstbal(8+x,24+y);



    }
}

let app = new App();
app.runApplication();
app.tekenHuis(1,1);
app.tekenHuis(100,100);
app.tekenKerstboom(0,0);
app.tekenKerstboom(150,150);
