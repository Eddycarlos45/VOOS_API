import { cities } from '../repository/citiesMock'

export const searchCities = (whereFrom: string, whereTo: string) => {

  const From = cities.find((item) => item.acronym === whereFrom);
  const To = cities.find((item) => item.acronym === whereTo);

  const response = {
    whereFrom: whereFrom,
    cityFrom: From?.city,
    whereTo: whereTo,
    cityTo: To?.city
  }

  return response
}