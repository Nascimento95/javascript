//01 hello world
console.log("hello world ! ");
// 02 string 
var test = "My name is marco "
console.log(test);
// 03 Concatenation
var firstName = "Nascimento"
console.log("Nice to meet you " + firstName);
// 04 String Length
var testLength ="I'm very long"
console.log(testLength.length);
// 05 Replace
var food ="croissant is meh"
food = food.replace("meh","so good");
console.log(food);
// 06 Up AND Down
var basic ="this is cool"
console.log(basic)
var basicUp = basic.toUpperCase()
console.log(basicUp)
var basicDown= basic.toLowerCase()
console.log(basicDown);
// 07 Split 
var world ="banana"
var letter = world.split("")
console.log(letter);
// 08 Template
var age = 32
var template = `I'm ${age} years old `
console.log(template);
// bonus
var rePlace="bonjour"
rePlace= rePlace.replaceAll("o","a")
console.log(rePlace);