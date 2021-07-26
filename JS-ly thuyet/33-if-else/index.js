var bills = [
    {value: 200},
    {value: 300},
    {value: 500000, fake: true},
    {value: 20000}
]

function totalBill(bills){
    return bills.reduce(function(total, bill){
        return total + bill.value
    }, 0)
}

function totalBill2(bills){
    var totalBill = 0;
    for (var bill of bills){
        if (bill.fake){
            console.log('Bill fake: ', bill);
            break;
        }
        totalBill+= bill.value;
    }
    return totalBill;
}

console.log(totalBill2(bills));