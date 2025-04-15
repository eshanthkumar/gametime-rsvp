import { RsvpService } from "./rsvp-service";
import { Player } from "./player";

const service = new RsvpService();

const player1: Player = { id: "1", name: "Alice" };
const player2: Player = { id: "2", name: "Bob" };
const player3: Player = { id: "3", name: "Charlie" };

service.addOrUpdateRsvp(player1, "Yes");
service.addOrUpdateRsvp(player2, "Maybe");
service.addOrUpdateRsvp(player3, "Yes");

console.log("Confirmed Attendees:", service.getConfirmedAttendees());
console.log("Counts:", service.getRsvpCounts());
