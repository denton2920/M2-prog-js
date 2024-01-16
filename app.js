
class App
{
    runApplication()
    {
       let headersBycssClass = document.getElementsByClassName("bandName")
       let data = []

       for(let i = 0; i < headersBycssClass.length; i++){
        const element = headersBycssClass[i];
        console.log(element);
        console.log(element.innerText);
     
       }

       for(let i = 0; i < headersBycssClass.length; i++){
        const element = headersBycssClass[i];
        console.log(element);
        console.log(element.innerText);
        element.innerText = "huh";
       console.log(headersBycssClass);
       }

       
       for(let i = 0; i < headersBycssClass.length; i++){
        const element = headersBycssClass[i];
        console.log(element);
        headersBycssClass[0].innerText = "nieuws";
        headersBycssClass[1].innerText = "reviews";
        headersBycssClass[2].innerText = "commentaar ";
        headersBycssClass[3].innerText = "beste fotum posts ";
        headersBycssClass[4].innerText = "pricewatch";
        console.log(headersBycssClass);

        let data = ["appel","taart","huis","tuin","werk"]

       for(let i = 0; i < data.length; i++){
        headersBycssClass[i].innerText = i+ ":" + data[i];
       }


       
      }
    }
}

let app = new App();
app.runApplication();