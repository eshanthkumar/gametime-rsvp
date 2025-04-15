import { Player, RsvpStatus } from "./player";
import { Logger } from "./logger";

export class RsvpService {
  private rsvps: Map<string, RsvpStatus> = new Map();
  private players: Map<string, Player> = new Map();

  constructor(private logger: Logger) {}

  addOrUpdateRsvp(player: Player, status: RsvpStatus): void {
    this.players.set(player.id, player);
    this.rsvps.set(player.id, status);
    this.logger.log(`RSVP updated for ${player.name}`, { status });
  }

  getConfirmedAttendees(): Player[] {
    const confirmed: Player[] = [];

    for (const [id, status] of this.rsvps.entries()) {
      if (status === "Yes") {
        const player = this.players.get(id);
        if (player) confirmed.push(player);
      }
    }

    this.logger.log("Retrieved confirmed attendees", confirmed);
    return confirmed;
  }

  getRsvpCounts(): { total: number; yes: number; no: number; maybe: number } {
    let yes = 0, no = 0, maybe = 0;

    for (const status of this.rsvps.values()) {
      if (status === "Yes") yes++;
      else if (status === "No") no++;
      else if (status === "Maybe") maybe++;
    }

    const counts = {
      total: this.rsvps.size,
      yes,
      no,
      maybe,
    };

    this.logger.log("RSVP counts", counts);
    return counts;
  }
}
