class bankacc{
    constructor(name,balance){
        this.name=name;
        this.balance=balance;
    }
    deposite(amount){
this.balance = this.balance + amount;


    }
    showbalance(){
        console.log("name:",this.name);
        console.log("balance:",this.balance);
        
   
        
        
    }

}
let bank=new bankacc("Ritik",5000);
bank.deposite(2000);
bank.showbalance();