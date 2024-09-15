function handleNum(number, evenCb, oddCb) {

    if (number % 2 == 0 ) {
        evenCb();

    } else {
        oddCb();
    }

}

function handleEven() {
    console.log("number is even");
}

function handleOdd() {
    console.log("number is odd");
}

handleNum(20, handleEven, handleOdd);
handleNum(21, handleEven, handleOdd);
