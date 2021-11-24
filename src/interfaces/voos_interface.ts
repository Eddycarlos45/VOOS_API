export interface Voos {
  price: number,
  company: string,
  whereFrom: string,
  cityFrom?: string,
  whereTo: string,
  cityTo?: string,
  howManyPeople: number,
  departureDate: string,
  departureHour: string,
  returnDate: string,
  returnHour: string,
  freeSeatsGoing: string[],
  freeSeatsReturn: string[],
}