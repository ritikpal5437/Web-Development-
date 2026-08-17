class Animal{
    constructor(name){
        this.name=name;
    }
    speak(){
        console.log("Animal makes a sound");
        
    }
}
    class Dog extends Animal{
        constructor(name,breed){
            super(name);
            this.breed=breed;
        }
        speak(){
            console.log("dog barks");
            
        }
        showdetails(){
            console.log("name:",this.name);
            console.log("breed:",this.breed);
            
        }
    }


dog1 = new Dog("Tommy", "Labrador")
dog1.showdetails()