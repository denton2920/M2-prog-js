/*   {
     const b = document.getElementById("button2")
        uiButten.addEventListener("click",(evt)=>
        {
            const para = document.createElement("h1");
            const node = document.createTextNode("natuur ");
            para.appendChild(node);
            document.body.appendChild(para);
        });
        uiButten.addEventListener("click",localeFuntion)
    }*/

class App
{
    runApplication()
    {
        console.log("hello world");
        const uiButten = document.getElementById("myButton");
        uiButten.addEventListener("click",(evt)=>
        {
            const para = document.createElement("p");
            const node = document.createTextNode("this is new. ");
            para.appendChild(node);
            document.body.appendChild(para);
        });
        

        const b = document.getElementById("button2")
        b.addEventListener("click",(evt)=>
        {
            const para = document.createElement("h1");
            const node = document.createTextNode("natuur ");
            para.appendChild(node);
            document.body.appendChild(para);
        });

        const c = document.getElementById("button2")
        c.addEventListener("click",(evt)=>
        {
            const para = document.createElement("p");
            const node = document.createTextNode("wat een mooie natuur ");
            para.appendChild(node);
            document.body.appendChild(para);
        });

        const d = document.getElementById("button2")
        d.addEventListener("click",(evt)=>
        {
            const img = new Image()
            img.src = "img/plaat.jpg"
            document.body.appendChild(img)         
        });

        const divAanpassen = document.getElementById("div")
        divAanpassen.addEventListener("click",(evt)=>{
            divAanpassen.style.backgroundColor = "green"
            const para = document.createElement("h1");
            const node = document.createTextNode("clicked a div ");
            para.appendChild(node);
            document.body.appendChild(para);

        })
        
    }
}

let app = new App();
app.runApplication();