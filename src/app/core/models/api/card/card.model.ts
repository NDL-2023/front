export enum CardType {
  FACT = 'fact',
  QUESTION = 'intox',
}

export interface Card {
  title: string;
  content: string;
  type: CardType;
  isTrue?: boolean;
  explanation?: string;
}
