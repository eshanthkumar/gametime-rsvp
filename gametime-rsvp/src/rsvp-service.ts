import { Player, RsvpStatus } from "./player";

export class RsvpService {
  private rsvps: Map<string, { player: Player; status: RsvpStatus }> = new Map();

  addOrUpdateRsvp(player: Player, status: RsvpStatus): void {
    this.rsvps.set(player.id, { player, status });
  }

  getConfirmedAttendees(): Player[] {
    return Array.from(this.rsvps.values())
      .filter(entry => entry.status === "Yes")
      .map(entry => entry.player);
  }

  getRsvpCounts(): { total: number; yes: number; no: number; maybe: number } {
    const counts = { total: 0, yes: 0, no: 0, maybe: 0 };

    this.rsvps.forEach(entry => {
      counts.total++;
      if (entry.status === "Yes") counts.yes++;
      else if (entry.status === "No") counts.no++;
      else counts.maybe++;
    });

    return counts;
  }
}
