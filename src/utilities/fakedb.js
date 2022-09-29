// use local storage to manage cart data
const addToDb = selectBreak => {
    let breakTimeCart = {};

    //get the shopping cart from local storage
    const storeTime = localStorage.getItem('breakTimeCart');
    if (storeTime) {
        breakTimeCart = JSON.parse(storeTime);
    }

    // add quantity
    const quantity = breakTimeCart[selectBreak];
    if (quantity) {
        const newQuantity = quantity;
        breakTimeCart[selectBreak] = newQuantity;
    }
    else {
        breakTimeCart[selectBreak] = 0;
    }
    localStorage.setItem('breakTimeCart', JSON.stringify(breakTimeCart));
}



export {
    addToDb

}