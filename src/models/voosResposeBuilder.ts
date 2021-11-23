import { airlines } from '../constants/airlines';
import { Voos } from '../interfaces/voos_interface';
import { searchCities } from '../services/voos_service';
import moment from 'moment';

moment.locale('pt-br');

export const builderResponse = (
  whereFrom: string,
  whereTo: string,
  howManyPeople: number,
  departureDate: string,
  returnDate: string,
  roundTrip: boolean) => {

  const cities = searchCities(whereFrom, whereTo);

  const NumberOfTrips = Math.floor(Math.random() * 3 + 1);

  const response: Voos[] = [];

  for (let i = 0; i < NumberOfTrips; i++) {

    const price = `R$: ${Math.floor(Math.random() * 999) + 100},${Math.floor(Math.random() * 99)}`;

    const trip: Voos = {
      price: price,
      company: airlines[Math.floor(Math.random() * 4)],
      whereFrom: cities.whereFrom,
      cityFrom: cities.cityFrom,
      whereTo: cities.whereTo,
      cityTo: cities.cityTo,
      howManyPeople: howManyPeople,
      departureDate: departureDate,
      departureHour: moment().hour(Math.floor(Math.random() * 23)).minute(Math.floor(Math.random() * 60)).format('LT'),
      returnDate: roundTrip ? returnDate : '',
      returnHour: roundTrip ? moment().hour(Math.floor(Math.random() * 23))
        .minute(Math.floor(Math.random() * 60)).format('LT') : '',
      freeSeatsGoing: makeSeats(),
      freeSeatsReturn: roundTrip ? makeSeats() : [''],
    }

    response.push(trip)
  }
  return response

}

const makeSeats = (): string[] => {
  const seats =
    ['3B', '2F', '9G', '2D', '6G', '5F', '4F', '3D', '2A', '8A',
      '7F', '4C', '1A', '1B', '1C', '2B', '2C', '5D', '6F', '9A'];
  const numberOfSeats = Math.floor(Math.random() * 13 + 1);
  const availableSeats: string[] = [];

  for (let i = 0; i < numberOfSeats; i++) {
    const index = Math.floor(Math.random() * seats.length);

    availableSeats.includes(seats[index]) ? '' : availableSeats.push(seats[index]);

  }

  return availableSeats;

} 