// console.log('Start making coffee');

// function bip(){
//     console.log('Bip Bip');
// }

// var bipTimeout = setInterval(bip, 100)

// console.log('Finish making coffee');

// clearInterval(1000)

var i = 0, end = 10;
// var iCountInterval = setInterval(function(){
//     console.log(i);
//     i++;
//     if (i==end){
//         clearInterval(iCountInterval);
//     }
// }, 100)

function countFrom(a, b){
    return new Promise(function(resolve){
        setInterval(function(){
            console.log(a++);
            if (a===b){
                console.log(a);
                clearInterval(this);
                resolve();
            }
        }, 100)
    })
}

countFrom(1, 10).then(()=> console.log('Done'));