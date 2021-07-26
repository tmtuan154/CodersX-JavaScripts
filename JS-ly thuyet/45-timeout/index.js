console.log('Start making coffee');

function bip(){
    console.log('Bip Bip');
}

var bipTimeout = setTimeout(bip, 1000);

console.log('Finish making coffee');
clearTimeout(bipTimeout)