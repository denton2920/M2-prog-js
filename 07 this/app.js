class App
{
    runApplication()
    {
        let patches = new User("patches the hyena");
        let user1 = new User ("ton");
        let user2 = new User("klaas");
        let user3 = new User("hans");
        let user4 = new User("joost");
        let user5 = new User("henk");
        let user6 = new User("jos");
        user6.wieBenIk();//jos
        user5.wieBenIk();//henk
        user2.wieBenIk();//klaas
        user3.wieBenIk();//hans
        user1.wieBenIk();//ton
        user6.wieBenIk();//jos
        user4.wieBenIk();//joost
        user2.wieBenIk();//klaas
        user3.wieBenIk();//hans
        user2.wieBenIk();//klaas
        patches.wieBenIk();//dit is commentaar

    }
}

class User
{
    constructor(name)
    {
        this.name = name
    }

    wieBenIk()
    {
        console.log(this.name) 
    }
}

let app = new App();
app.runApplication();