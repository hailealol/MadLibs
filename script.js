let stories = ["Summer", "My Birthday Wishlist", "Autumn"];
const storyTitle = document.getElementById("title");
const displayStory = document.getElementById("story");
const playBtn = document.getElementById("playBtn");

function begin() {
// Chooses a random story from the array
    const random = stories[Math.floor(Math.random() * stories.length)];

    if (random == "Summer") {
        summer();
    } else if (random == "My Birthday Wishlist") {
        birthday();
    } else if (random == "Autumn") {
        autumn();
    };

};

function summer() {
    var noun = prompt("Enter a noun:");
    var color = prompt("Enter a color:");
    var num = prompt("Enter a number:");
    var place = prompt("Enter a place:");
    var verb = prompt("Enter a verb that ends in -ing:");
    var family = prompt("Enter a family member:");
    var familyTwo = prompt("Enter another family member:");
    var familyThree = prompt("Enter a third family member:");
    var book = prompt("Enter a book:");
    var flavor = prompt("Enter a ice cream flavor:");
    var numTwo = prompt("Enter a number:");
    var candy = prompt("Enter a candy:");
    var fruit = prompt("Enter a fruit:");
    var food = prompt("Enter a food:");

    storyTitle.innerHTML = "Summer";
    displayStory.innerHTML = `Summer is here! The ${noun} is shining, the sky is ${color}, and the weather is so warm! in fact, it's ${num} degrees outside! I can't wait to visit the neighborhood ${place} and go ${verb}! When we go to the pool, everyone in my family likes to spend the time a little differently. ${family} likes to race down the water slides, while ${familyTwo} jumps as far as possible off the high dive! ${familyThree} likes to sit by the pool and read ${book} without even getting in the water! After we go swimming, we like to go out for ice cream. My favorite flavor to get is ${flavor}. I get ${numTwo} scoop(s) and add ${candy} and ${fruit} as toppings! Summer nights are the best. At the end of the day, there's nothing like gathering around the campfire and roasting ${food}!`;
    playBtn.childNodes[1].textContent = "Play Again?";
};

function birthday() {
    var num = prompt("Enter a number:");
    var verb = prompt("Enter a verb that ends in -ed:");
    var adj = prompt("Enter a adjective:");
    var noun = prompt("Enter a noun:");
    var verbTwo = prompt("Enter a verb:");
    var adjTwo = prompt("Enter a adjective:");
    var nounTwo = prompt("Enter a noun:");
    var verbThree = prompt("Enter a verb:");
    var nounThree = prompt("Enter a noun:");
    var verbFour = prompt("Enter a verb that ends in -s:");
    var color = prompt("Enter a color:");
    var adjThree = prompt("Enter a adjective:");
    var nounFour = prompt("Enter a noun:");
    var flavor = prompt("Enter a cake flavor:");
    var colorTwo = prompt("Enter a color:");
    var nounFive = prompt("Enter a plural noun:");
    var adjFour = prompt("Enter a adjective:");
    var nounSix = prompt("Enter a plural noun:");
    var verbFive = prompt("Enter a verb:");

    storyTitle.innerHTML = "My Birthday Wishlist";
    displayStory.innerHTML = `This year on my birthday I'm turning ${num} year(s) old. I've already ${verb} my wishlist. First, I want a ${adj} ${noun} to ${verbTwo} with. I also really hope I get a ${adjTwo} ${nounTwo} that I can ${verbThree} to school each day. I'd also like a ${nounThree} that ${verbFour} and a ${color} ${adjThree} ${nounFour}. My favorite kind of cake is ${flavor} with ${colorTwo} ${nounFive} on top. I hope to have a ${adjFour} party with lots of ${nounSix} to ${verbFive} the fun with me!`;
    playBtn.childNodes[1].textContent = "Play Again?";
};

function autumn() {
    var name = prompt("Enter a name:");
    var adj = prompt("Enter a adjective:");
    var object = prompt("Enter a plural object:");
    var objectTwo = prompt("Enter another plural object:");
    var animal = prompt("Enter a animal:");
    var verb = prompt("Enter a verb that ends in -ing:");
    var verbTwo = prompt("Enter another verb that ends in -ing:");
    var adjTwo = prompt("Enter a adjective:");
    var num = prompt("Enter a number > 1:");
    var adjThree = prompt("Enter a adjective:");
    var animalTwo = prompt("Enter a plural animal:");
    var nameTwo = prompt("Enter a name:");
    var objectThree = prompt("Enter a plural object:");

    storyTitle.innerHTML = `${name}'s Winter Preparation`;
    displayStory.innerHTML = `${name} the squirrel had just climbed up the ${adj} tree. It was the first day of autumn and time to gather as many ${object} and ${objectTwo} for winter feasting. Chester the ${animal} asked his squirrel friend to take a break and join him for a little ${verb} and ${verbTwo}. The two buddies had so much fun but ${name} really needed to finish gathering. They returned to their ${adjTwo} home to find that ${num} ${adjThree} ${animalTwo} were waiting for ${name} to go to the fall festival party at ${nameTwo}'s house. ${name} realized that there wasn't going to be any more work that day. Today had been fun but tomorrow he'd need to collect more ${objectThree} for the winter.`;
    playBtn.childNodes[1].textContent = "Play Again?";
};