class Check {
    constructor(date, amount ){
        this.amount = amount;
        this.date = date;
    }

    show(){
        console.log(`Чек от ${this.date} на сумму ${this.amount}`)
    }
}


let checks = [
    new Check("21.07.22", 889),
    new Check("09.09.26", 760),
    new Check("30.01.22", 360),
    new Check("31.12.22", 1260),
]

for(let i = 0; i < checks.length; i++){
    checks[i].show();
}

function calculateTotal(checksArray){
    let total = 0;
    for(let i = 0; i < checksArray.length; i++){
        total = total + checks[i].amount;
    }
    return total
}
let summ =   calculateTotal(checks);

if(summ > 500){
    console.log(`${summ} о отличная смена`);
}else{
    console.log(`${summ} о обычная  смена ;(`);
}