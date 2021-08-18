function embaralhar(array){
    var i =0;
    const arra=[];
    while(i <array.length){
        var n = aleatorio(array.length);
        if(!arra.includes(n)){
            arra.push(n);
            i++
        }
    }
    return arra;
}

function aleatorio(max){
    return Math.floor(Math.random()*(max-0+1)+0)
}