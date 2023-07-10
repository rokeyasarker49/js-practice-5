// function smallestnumber(numberOfArray){
        // let smallest = numberOfArray[0];
        // for(let i=0; i<numberOfArray.length; i++){
                // console.log(numberOfArray[i]);
                // if(numberOfArray[i] < smallest){
                        // smallest = numberOfArray[i];
                // }
        // }
        // return smallest;

// }

// smallestnumber([10,20,30,40,50,60])
// console.log(smallestnumber([10,20,30,40,50,60]))

// const name = ["Subah", "Shuchy", "Bushra", "Akhi", "Subah", "Shuchy", "Bushra", "Akhi", "Subah", "Shuchy", "Bushra", "Akhi"];
// function removeDuplicate(array){
        // const uniqueNames =[];
        // for(let i=0; i<array.length; i++){
                // console.log(names[i]);
                // if(uniqueNames.indexOf(names[i] == -1)){
                        // uniqueNames.push(names[i]);
                // }
        // }
        // return uniqueNames;
// }

// const output = removeDuplicate(names);
// console.log(output);

// let numbers = [0,1,2,3,4,5,6];
// for(const number of numbers){
        // console.log(number);
// }

// const test = "Hello World"
// for(const letter of text){
        // console.log(letter);
// }

// let actorName = "Salman Khan";
// function reversedSentences(sentence){
        // let reversed = "";
        // for(var i=0; i<sentence.length; i++){
                // console.log(sentenc[i]);
                // let letter = sentence[i];
                // a
                // reversed = letter + reversed;
                // s= a + s
        // }
        // return reversed;
// }

// console.log(reversedSentences(actorName));

// function add(num1, num2){
        // console.log(num1, num2);
        // return num1 + num2;

// }

// const result = add(10,10);
// const result = add(10+10, 10);
// console.log(typeof result);



// function woodCalculator(chairQty, tableQty, bedQty){
        // let perchairWood = 4;
        // let perbedWood = 10;
        // let pertable = 15;

        // const chairWoodQty = chairQty * perchairWood;
        // const tableWoodQty = tableQty * pertable;
        // const bedWoodQty = bedQty * perbedWood

        // return chairWoodQty + tableWoodQty + bedWoodQty;

// }

// console.log(woodCalculator(5, 6, 2));

// let subah = null;
// console.log(subah);

// for(i=1; i<=50; i++){
        // console.log(i);
        // if(i%3==0 && i%5==0){
                // console.log("foobar");
        // }
        // else if(i%3==0){
                // console.log("foo");
        // }
        // else if(i%5==0){
                // console.log("bar");
        // }
        // else{
                // console.log(i);
        // }
// }

// const tshirts = [
        // {name: "boys", price: 520, color: "black", size: "XL"},
        // {name: "girls", price: 620, color: "blue", size: "L"},
        // {name: "men", price: 220, color: "brown", size: "M"},
        // {name: "women", price: 1020, color: "pink", size: "A"},
        // {name: "children", price: 120, color: "yellow", size: "M"},
// ]

// let cheapest = tshirts[0];
// let total = 0;

// for(const tshirt of tshirts){
        // console.log(tshirt.price);
        // if(cheapest.price > tshirt.price){
                // cheapest = tshirt;
        // }
        // total += tshirt.price;
// }

// console.log(cheapest);
// console.log(total);

const cartItem = [
        {name: "boys", price: 520, color: "black", qty: 2},     
        {name: "girls", price: 620, color: "blue", qty: 5},
        {name: "men", price: 220, color: "brown", qty: 3},
        {name: "women", price: 1020, color: "pink", qty: 4},
        {name: "children", price: 120, color: "yellow", qty: 6},
];

let totalShopping = 0;

 for(const item of cartItem){
        // console.log(item);
        // console.log(item.price);
        // console.log(item.qty);
         const singleItemTotalPrice = item.price * item.qty;
         totalShopping += singleItemTotalPrice
}

console.log(totalShopping)
