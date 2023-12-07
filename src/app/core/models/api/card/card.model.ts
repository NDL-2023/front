export enum CardType {
  FACT = 'fact',
  QUESTION = 'question',
  TOPIC = 'topic',
}

export interface Card {
  id: number;
  title: string;
  content: string;
  type: CardType;
  isTrue?: boolean;
  explanation?: string;
}
