// 1)
console.log(`PROBLEM 1`);
const carThree = {
    wheels: 3,
    owner: "Triangle Man",
    isBroken: false,
    color: "red"
};

carThree.price = 2000;
//NOTE TO SELF: MUST USE QUOTES FOR KEYS FOR BRACKET NOTATION
carThree["year"] = 1999;
carThree.isBroken = true;
console.log(`The owner of the car is ${carThree.owner}`);

let clientIsInterested;

clientInterested = (carThree.color === "blue") ? true : false;

delete carThree.owner;

console.log(`The car object is now: ${JSON.stringify(carThree)}`);

// 2)
console.log(`PROBLEM 2`);
const store = {
    profit: 2000,
    manager: "Monopoly Man",
    isOpenNow: true,
    isVeryExpensive: false
};
store.location = "Miami";
store["storeType"] = "flagship";
store.isOpenNow = false;
console.log(`The store is very expensive: ${store.isVeryExpensive}`);

let canShopHere;
canShopHere = (store.isOpenNow && !store.isVeryExpensive) ? true : false;

delete store.profit;
console.log(`The store object is now ${JSON.stringify(store)}`);

// 3)
console.log(`PROBLEM 3`);
const home = {
    rooms: 5,
    bathrooms: 2,
    isForSale: false,
    isInGoodLocation: true
};

home.price = 100000;
home["year"] = 2020;
home.isForSale = true;
console.log(`The home's value is ${home.bathrooms}`)

let buyHome;
buyHome = (home.isForSale && home.isInGoodLocation) ? true : false;
delete home.isForSale;

// without the JSON.stringify, console logs the object within the template literal as [object Object]. 
// template literals are doing... something to objects that make them appear that way
// JSON.stringify converts the object to a JSON string. doing this for readability
console.log(`The home object is: ${JSON.stringify(home)}`);
console.log(`You should buy this home: ${buyHome}`);

// 4)
console.log(`PROBLEM 4`);
let movie = {
    title: "Girl Meets Boy",
    genre: "Romantic Comedy",
    runtime: 200,
    isOscarNominated: false
};

movie.year = 1995;
movie["director"] = "Tarantino";
movie.genre = "Comedic drama";
console.log(`The movie's runtime in minutes is ${movie.runtime}`);

let isMovieNightWorthy;
isMovieNightWorthy = (movie.isOscarNominated && movie.runtime < 150) ? true : false;

console.log(`You should watch this movie: ${isMovieNightWorthy}`);

delete movie.genre;
console.log(`This movie object is now: ${JSON.stringify(movie)}`);


// 5)
console.log(`PROBLEM 5`);
let fanfic = {
    kudos: 2450,
    comments: 1323,
    additionalTags: ["fluff", "alternative universe", "change of fortune", "ambiguous ending"],
    title: "Batman becomes Batdad"
};

fanfic.author = "Anonymous";
fanfic["comments"] -= 1;
console.log("number of comments on this fanfic is", fanfic.comments);

let isBingeWorthy;

isBingeWorthy = (fanfic.kudos/fanfic.comments > 1.0) ? "yes" : "no";
console.log("Should you read this fanfiction?", isBingeWorthy);

delete fanfic.author;

console.log(fanfic);
