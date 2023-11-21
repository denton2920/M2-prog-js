class App
{
    runApplication()
    {
        let appNaam = ("hallo");
        let versienummer = 12;
        let versiedatum = ("21-11-2023");
        let authert = ("Dennis Ton");
        let coppyright = ("Dennis Ton");
        let distributeur = ("Dennis Ton");
        let darkmode = false;
        console.log("appNaam: "+ appNaam + "\nversienummer: "+ versienummer + "\nversiedatum: "+ versiedatum + "\nauthert: "+ authert + "\ncoppyright: " + coppyright + "\ndistributeur: " + distributeur + "\nhdarkmode: "+ darkmode);
    }
}

let app = new App();
app.runApplication();