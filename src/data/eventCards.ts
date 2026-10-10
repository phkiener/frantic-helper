export type EventCard = {
    title: string;
    description: string;
}

export async function loadEventCards(): Promise<EventCard[]> {
    const result = await fetch("/eventCards.json");
    const body = await result.json();

    return body.cards as EventCard[];
}
