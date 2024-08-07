function checkOrder (available, ordered) {
    if (ordered == 0) {
    return `Your order is empty`;
    } else if (available < ordered) {
        return `Your order is too large, we don’t have enough goods.`;
    } else if (available >= ordered) {
        return `Your order is accepted`;
    } 

};

const availability1 = checkOrder(12,0);
console.log(availability1);

const availability2 = checkOrder(0,12);
console.log(availability2);

const availability3 = checkOrder(12,12);
console.log(availability3);