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

  const response = [];

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
    }

    response.push(trip)
  }
  return response

}