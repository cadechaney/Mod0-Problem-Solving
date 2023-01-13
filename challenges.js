
var char = ["1234", "1234", "12", "1"]

for (var i = 0; i < char.length; i++) {
    var char2 = char[i];
    if (char2.length > 3 && char2.length < 5) {
        console.log(char2)
    }
}

// To get exactly four characters to show I used a (&&) in order to make sure the 
// statement of not less than three and not greater than five were true, leaving me with only the value of four to log.
// Only showing the variable strings with exactly a length of four (1234 and 1234)

var words = ["WorDs", "IN", "loWerCaSe"] 

for (var i = 0; i < words.length; i++){
    
    console.log(words[i].toLowerCase());
}

//To change all uppercase letters in each string I needed to use a .length method in the 
// for statement in order to manipulate every character. Then in the console.log I used a .toLowerCase method
// so I can then change all characters to lowercase.

var words2 = ["Tom", "Tot", "Mom", "Mop"]

for (var i = 0; i < words2.length; i++) {
    if (words2[i].startsWith("T") === true) {
        console.log(words2[i]);
    }
}
//To only return strings starting with T I needed to use a .startsWith method in my if statement 
//follow by () with T in it. Telling the method to segregate T from my strings. 
// Then using console.log on words2[i]. It was displayed

var words3 = ["Herring", "Ball", "Bouncing", "Billing"]

for (var i = 0; i < words3.length; i++) {
    if (words3[i].endsWith("ing") === true) {
        console.log(words3[i]);
    }
}
//In order to only return strings ending in ing I needed to use the .endsWith method in my if statement
// Using the statement if the words ended in (ing) they became displayed due to the console.log

var places = ["Tokyo", "Cairo", "Austin"]

var placesSorted = places.sort();

for (var i = 0; i < places.length; i++) {
    console.log(`The next place I want to visit is ${i + 1} ${placesSorted[i]}!`)
}

// I first needed to list the places in an array. After that I had to redine the variable to 
// the sorted version with the prior variable being put through the .sort method
// In my for statement I used I used interpolation to place in my sorted variable. 
// With a sentence around it describing it, saying the next place I want to visit

var lowCase = ["print", "first", "up"]

//var upCase = lowCase.charAt(0).toUpperCase();

// for (var i = 0; i < lowCase.length; i++) {
//     var caps = lowCase.charAt(0).toUpperCase()
//     console.log(caps)
//       //console.log(upCase);
// }

