const nums = [1, 2, 3];

const totalNums = nums.reduce((accumulator, currentValue) => {
//   console.log(`Accumulator: ${accumulator}, Current Value: ${currentValue}`);
  return accumulator + currentValue;
}, 0);
// console.log(`Total: ${totalNums}`);


const shoppingCart = [
    { name: "Apple", price: 90, quantity: 3 },
    { name: "Banana", price: 50, quantity: 5 },
    { name: "Orange", price: 40, quantity: 2 }
]

const totalPrice = shoppingCart.reduce((accumulator, item) => {
    console.log(`Accumulator: ${accumulator}, Item: ${item.name}, Price: ${item.price}, Quantity: ${item.quantity}`);
    return accumulator + (item.price * item.quantity);
}, 0);

console.log(`Total Price: ${totalPrice}`);