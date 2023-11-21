class App
{
    runApplication()
    {
        this.appNaam = ("hallo");
        this.versienummer = 12;
        this.versiedatum = ("21-11-2023");
        this.authert = ("Dennis Ton");
        this.coppyright = ("Dennis Ton");
        this.distributeur = ("Dennis Ton");
        this.darkmode = false;
        let fruit =("banaan")
        let getal = 18
        let hoog = true
        this.naam = ("Dennis")
        this.tweedeGetal = 20
        this.laag = true
        console.log(fruit)
        console.log(getal)
        console.log(hoog)
    }
}

let app = new App();
app.runApplication();
console.log("appNaam" + app.appNaam);
console.log("versienummer: " + app.versienummer);
console.log("versiedatum: " + app.versiedatum);
console.log("authert" + app.authert);
console.log("coppyright: " + app.coppyright);
console.log("distributeur: " + app.distributeur);
console.log("darkmode: " + app.darkmode);
console.log(app.naam)
console.log(app.tweedeGetal)
console.log(app.laag)