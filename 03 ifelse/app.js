class App
{
    runApplication()
    {
      console.log("hello world!")

      let title = document.getElementById("newstitle")
      let tweederegel = document.getElementsByClassName("gamenews")[0]
      let derderegel = document.getElementsByClassName("gamenews")[1]
      console.log(title + tweederegel + derderegel)

      let random = Math.random();
      console.log(random);
      if(random < 0.2)
      {
        title.style.backgroundColor = "#FF0000";
        tweederegel.style.backgroundColor = "#ffa500";
        derderegel.style.backgroundColor = "#3ae194"
      }else if(random > 0.2 && random < 0.6){
        title.style.backgroundColor = "#8c0ca9";
        tweederegel.style.backgroundColor = "#FF0000";
        derderegel.style.backgroundColor = "#ffa500"
      }else if(random > 0.6 && random < 0.75 ){
        title.style.backgroundColor = "#3ae194";
        tweederegel.style.backgroundColor = "#8c0ca9";
        derderegel.style.backgroundColor = "#FF0000"
      }else if(random > 0.75){
        title.style.backgroundColor = "#ffa500";
        tweederegel.style.backgroundColor = "#3ae194";
        derderegel.style.backgroundColor = "#8c0ca9"
      }

     
    }
}

let app = new App();
app.runApplication();