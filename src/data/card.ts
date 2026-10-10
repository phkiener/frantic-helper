export type GameEdition = "Base" | "Troublemaker";

export type Color = "Single" | "Multi" | "White" | "Black";
const colorIndex = {
    "Single": 1,
    "Multi": 2,
    "White": 3,
    "Black": 4,
}

export type Card = {
    id: string;
    title: string;
    description: string;
    color: Color;
    edition: GameEdition;
}

export function compareCards(a: Card, b: Card) {
    const colorResult = colorIndex[a.color] - colorIndex[b.color];
    if (colorResult !== 0) {
        return colorResult;
    }

    return a.title.localeCompare(b.title);
}
