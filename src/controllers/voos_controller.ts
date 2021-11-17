import { Request, Response } from 'express';
import { acronyms } from '../constants/acronyms';
import { airlines } from '../constants/airlines';
import { Voos } from '../interfaces/voos_interface';
import { searchCities } from '../services/voos_service';
import moment from 'moment';

moment.locale('pt-br');

export const search = (req: Request, res: Response) => {
  const { whereFrom, whereTo, howManyPeople, departureDate, returnDate, roundTrip } = req.body;
  try {
    validateAcronym(whereFrom);
    validateAcronym(whereTo);

    const cities = searchCities(whereFrom, whereTo);

    const price = `R$: ${Math.floor(Math.random() * 999) + 100},${Math.floor(Math.random() * 99)}`

    const response: Voos = {
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

    res.send(response)
  }
  catch (error) {
    res.status(500).send({ message: error.message })
  }
}

function validateAcronym(acronym: any) {
  if (!acronyms.includes(acronym)) {
    throw new Error('Sigla inválida')
  }
}