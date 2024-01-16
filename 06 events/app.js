/*   {
        const b = document.getElementById("myButton")
        b.addEventListener("click",(evt)=>{})
    }*/

class App
{
    runApplication()
    {
        console.log("hello world");
        const uiButten = document.getElementById("myButton");
        uiButten.addEventListener("click",(evt)=>{});
        let localeFuntion = function (e)
        {
            console.log("click!")
        }
        uiButten,addEventListener("click",localeFuntion)
    }
}

let app = new App();
app.runApplication();