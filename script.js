var groceryList = [
{item: "Milk", price: 3.99},
{item: "Yogurt", price: 2.50},
{item: "Apples", price: 3.00}
];

for (var i=0; i<groceryList.length; i++){
console.log(groceryList[i].item + ": $"   +   groceryList[i].price);
}

var total =0;
for (var i=0; i<groceryList.length; i++) {
total+= groceryList[i].price;
}
console.log ("Total: $" + total);
