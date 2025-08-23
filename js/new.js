let hello = '45112'
for(h of hello){
    if(isNaN(h) || h === ' '){
        hello = false;
    }
    hello = true
}
console.log(hello)