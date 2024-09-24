import { CricketCoack } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";
import { Coach } from "./Coach";

let myCricketCoach = new CricketCoack;
let myGolfCoach = new GolfCoach;

// Declare an array for coaches ... initially empty
let theCoaches: Coach[] = [];

// Add the coaches to the array
theCoaches.push(myCricketCoach);
theCoaches.push(myGolfCoach);

for (let tempCoach of theCoaches) {
    console.log(tempCoach.getDailyWorkout());
}