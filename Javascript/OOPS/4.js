class Animal{
    constructor(name){
        this.name;
    }
    speak(){
        console.log("Animal makes a sound");
        
    }
}
    class Dog extends Animal{
        speak(){
            console.log("dog barks");
            
        }
    }
dog1 = new Dog("Tommy")
dog1.speak()