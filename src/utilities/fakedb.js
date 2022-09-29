// use local storage to manage cart data
const addToDb = selectBreak => {
    let breakTimeCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('breakTimeCart');
    if (storedCart) {
        breakTimeCart = JSON.parse(storedCart);
    }

    // add quantity
    const quantity = breakTimeCart[selectBreak];
    if (quantity) {
        const newQuantity = quantity + 1;
        breakTimeCart[selectBreak] = newQuantity;
    }
    else {
        breakTimeCart[selectBreak] = 1;
    }
    localStorage.setItem('breakTimeCart', JSON.stringify(breakTimeCart));
}



export {
    addToDb

}