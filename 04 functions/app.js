function heeftEenResultaat()
{
    let resultaat =1;
    return resultaat;
}

let hetResultaat = heeftEenResultaat();//opvangen
console.log(hetResultaat);// en gebruikten via de variable
console.log(heeftEenResultaat());//direct gebruiken

function ax2bcWiskunde(x,a,b,c)
{
let y = (a*(x*x) )+ (b*x) +c
return y;
}

let y1 = ax2bcWiskunde(9,3,4,89);
console.log(y1);

let y2 = ax2bcWiskunde(3,6,5,45);
console.log(y2);

let y3 = ax2bcWiskunde(7,1,2,13);
console.log(y3) 

function argumentsAreHandy(shoutout)
{
    console.log("do you want to give a shoutout?");
    console.log(shoutout);
}

argumentsAreHandy("Super Shout out");
argumentsAreHandy("hou het netjes!");
argumentsAreHandy("dag allemaal");


function rekenen(u,h,l)
{
    let logY = Math.log(l) + h + Math.pow(u,2);
    return logY
}

let logY1 = rekenen(9,8,15)
console.log(logY1)

let logY2 = rekenen(4,9,20)
console.log(logY2)

let logY3 = rekenen(1,13,6)
console.log(logY3)

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
    newClassFuntion(aArgument)
    {
        console.log("hello world in de nieuwClassFuntion");
        console.log("hier:")
        console.log(aArgument)
    }

}

let app = new App();
app.runApplication();
app.newClassFuntion("mijn argument is iets...");

















//hier maak ik de function (definitie)
function aanroepVoorbeeld()
{

}
aanroepVoorbeeld();//hier gebruik ik de function