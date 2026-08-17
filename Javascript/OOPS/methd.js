class car {
    constructor(brand,model){
        this.brand= brand;
        this.model=model;

    }
    
        showdetails() {
    console.log("Brand:", this.brand);
    console.log("Model:", this.model);
}
    }

let car1=new car("Hyundai", "i20");
car1.showdetails();