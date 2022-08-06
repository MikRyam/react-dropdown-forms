export const getFormatedCitiesData = (data) => {
  const cities = data
    .map((region) => {
      return (!region.areas.length)
        ?
        {
          id: region.id,
          name: region.name,
          region: 'Россия',
        }
        : region.areas.map((city) => {
          return {
            id: city.id,
            name: city.name.split('(')[0].trim(),
            region: region.name,
          }
        })
    })
  return cities.flat();
};

// export const cities = getFormatedCitiesData(citiesData);

export default getFormatedCitiesData;
