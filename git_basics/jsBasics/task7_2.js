function numDecr(num) {
    
    console.log(num);  

    if (num <= 0){
    console.log("The number cannot be decreased anymore");
    return;
} else {
    numDecr(num-1);
}
}

numDecr(5);