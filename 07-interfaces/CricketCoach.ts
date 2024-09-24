import { Coach } from "./Coach";

export class CricketCoack implements Coach {

    getDailyWorkout(): string {
        return "Practice your spin bowling technique.";
    }

}