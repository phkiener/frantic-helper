export type GameEdition = "Base" | "Troublemaker";

export type Card = {
    id: string;
    title: string;
    description: string;
    edition: GameEdition;
}
