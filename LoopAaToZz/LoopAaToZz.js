

function abjad(hurufA, hurufZ){
    var a=[],
    i=hurufA.charCodeAt(0), j=hurufZ.charCodeAt(0);
    for(; i<=j; ++i){
        // a.push((i));
        a.push(String.fromCharCode(i));
    }
    return a;
}
console.log(abjad('A','Z'));
// console.log(j);
