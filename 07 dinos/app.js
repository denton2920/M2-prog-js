class Dino
{
    
    constructor(naam,vleeseter,leeftijd)
    {
        this.naam = naam;
        this.vleeseter = vleeseter
        this.leeftijd = leeftijd

    }

    eatFood(foodToEat)
    {
        foodToEat.leeftijd=false;
        this.honger=false
        console.log("ik ben een " +this.naam)
        console.log("mijn honger: "+this.honger)
    }
        
}

class Plant
{
    constructor(naam,leeft)
    {
        this.naam = naam
        this.leeft = leeft
    }
}


class App
{
    runApplication()
    {
        let dino = new Dino("T-Rex",true, 20);
        let plantenEter = new Dino("Triceratops",false,20)
        console.log(dino);
        console.log("de leeftijd van de "+ dino.naam + "is" +dino.leeftijd+ "jaar");
        console.log("en de "+dino.naam+ " eet vlees "+ dino.vleeseter);
        console.log(plantenEter)
        dino.eatFood(plantenEter)
        console.log("leeft "+plantenEter.naam+ " ? " + plantenEter.leeftijd)
        let plant = new Plant("gras",true);
        let plant2 = new Plant("struik",false);
        console.log(plant)
        console.log(plant2)
        console.log("de " + plantenEter.naam + " eet " + plant.naam + " en " + plant2.naam,);


        
        
    }
}

let app = new App();
app.runApplication();