
function month(){
    return Math.floor(Math.random() * 12);
}

var mo = Math.floor(Math.random() * 12);

switch(mo){
    case 1:
        console.log('Thang 1');
        break;
    case 2:
        console.log('Thang 2');
        break;
    default:
        console.log('Thang con lai');
}