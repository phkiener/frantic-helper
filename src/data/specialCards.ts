import type { Card } from "./card.ts";

export type SpecialCard = Card;

export async function loadSpecialCards(): Promise<SpecialCard[]> {
    const result = await fetch("/specialCards-DE.json");
    const body = await result.json();

    return body.cards as SpecialCard[];
}
