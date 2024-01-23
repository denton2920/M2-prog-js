export class Dino
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