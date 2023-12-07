export enum CardType {
  FACT = 'fact',
  QUESTION = 'question',
}

export interface Card {
  title: string;
  content: string;
  type: CardType;
  isTrue?: boolean;
  explanation?: string;
}
