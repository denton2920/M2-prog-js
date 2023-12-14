class App
{
    runApplication()
    {
       
        let eenArray = ["artiest1", "artiest2", "artiest3"]
        console.log(eenArray)
        for (let i = 0; i < eenArray.length; i++){
            const element = eenArray[i];
            console.log(i + ": "+ element)
        }

        let nummers = [9,12,20]
        console.log(nummers)
        for (let i = 0; i < nummers.length; i++){
            const element = nummers[i]+1;
            console.log(i + ": "+ element)
        }

    }
}

let app = new App();
app.runApplication();