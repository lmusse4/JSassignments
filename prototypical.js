// Part 1
function Person(firstName, lastName, favoriteColor, favoriteNumber, favoriteFoods) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteNumber = favoriteNumber;
    this.favoriteFoods = favoriteFoods;
    //part 4
    this.family = [];
  }
  
  // Part 2
  Person.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
  };
  
  // part 3
  Person.prototype.toString = function() {
    return this.firstName + " " + this.lastName + ", Favorite Color: " + this.favoriteColor + ", Favorite Number: " + this.favoriteNumber;
  };
  
  // part 5
  Person.prototype.addToFamily = function(person) {
    if (person instanceof Person && !this.family.includes(person)) {
      this.family.push(person);
    }
    return this.family.length;
  };
  
  // Testing the methods
  let peter = new Person("Peter", "Oleary", "Green", 42, ['pasta', 'pizza']);
  let myles = new Person("Myles", "Smith", "Green", 24, ['burgers', 'sushi']);
  
  console.log(peter.fullName()); 
  console.log(myles.fullName()); 
  
  console.log(peter.toString()); 
  
  console.log(peter.addToFamily(myles)); // 1
  console.log(peter.addToFamily(myles)); // 1 (no duplicates allowed)
  
  console.log(peter.family); 
  console.log(myles.family); // [] (empty)
  