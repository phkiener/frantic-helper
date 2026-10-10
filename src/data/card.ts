export type GameEdition = "Base" | "Troublemaker";
export type Color = "Single" | "Multi" | "White" | "Black";

export type Card = {
    id: string;
    title: string;
    description: string;
    color: Color;
    edition: GameEdition;
}
