import type { Card } from "./card.ts";

export type EventCard = Card;

export async function loadEventCards(): Promise<EventCard[]> {
    const result = await fetch("/eventCards-DE.json");
    const body = await result.json();

    return body.cards as EventCard[];
}
