function argumentsAreHandy(shoutout)
{
    console.log("do you want to give a shoutout?");
    console.log(shoutout);
}

argumentsAreHandy("Super Shout out");
argumentsAreHandy("hou het netjes!");
argumentsAreHandy("dag allemaal");

function superMooieGlobalFuntion()
{
    console.log("ik ben global");
    console.log("dus je mag mij overal aanroepen");
}
superMooieGlobalFuntion();
superMooieGlobalFuntion();

class App
{
    runApplication()
    {
        console.log("hallo weereld");
        superMooieGlobalFuntion();
        

    }
}

let app = new App();
app.runApplication();

















//hier maak ik de function (definitie)
function aanroepVoorbeeld()
{

}
aanroepVoorbeeld();//hier gebruik ik de function