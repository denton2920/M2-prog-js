class App
{
    runApplication()
    {
        console.log("hello world!")
    }
    
}

class greet
{
    constructor()
    {
        this.greeting = "Greetings! " 
    }

    showGreeting()
    {
        console.log("greeting van binnen: " + this.greeting)
    }
}

class Goodbye
{
    constructor()
    {
       this.farwell = "Bye Bye!"
    }

    showBye()
    {
        console.log("bye bye van binnen " + this.farwell)
    }
}

let newGreet = new greet();
let bye = new Goodbye();
let app = new App();
app.runApplication();
newGreet.showGreeting();
bye.showBye();
console.log("greeting van buiten: " + newGreet.greeting)
console.log("bye bye van buiten " + bye.farwell)
