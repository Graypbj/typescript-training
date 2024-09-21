var sportOne = ["Golf", "Cricket", "Tennis", "Swimming"];
/*
for (let i=0; i < sportOne.length; i++) {
    console.log(sportOne[i]);
}
    */
// Simplified loop
for (var _i = 0, sportOne_1 = sportOne; _i < sportOne_1.length; _i++) {
    var tempSport = sportOne_1[_i];
    if (tempSport == "Cricket") {
        console.log(tempSport + " << My Favorite!");
    }
    console.log(tempSport);
}
