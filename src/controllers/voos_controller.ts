import { Request, Response } from 'express';
import { acronyms } from '../constants/acronyms';
import { builderResponse } from '../models/voosResposeBuilder'

export const search = (req: Request, res: Response) => {
  const { whereFrom, whereTo, howManyPeople, departureDate, returnDate, roundTrip } = req.body;
  try {
    validateAcronym(whereFrom);
    validateAcronym(whereTo);

    const response = builderResponse(whereFrom, whereTo, howManyPeople, departureDate, returnDate, roundTrip)

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