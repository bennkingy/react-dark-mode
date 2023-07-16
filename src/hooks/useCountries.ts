const formattedRegions = [
  {
    value: 'East Midlands',
    label: 'East Midlands',
    latlng: [52.8771, -0.9056],
    // region: 'England'
  },
  {
    value: 'East of England',
    label: 'East of England',
    latlng: [52.2405, 0.5500],
    // region: 'England'
  },
  {
    value: 'London',
    label: 'London',
    latlng: [51.5074, -0.1278],
    // region: 'England'
  },
  {
    value: 'North East England',
    label: 'North East England',
    latlng: [54.9783, -1.6174],
    // region: 'England'
  },
  {
    value: 'North West England',
    label: 'North West England',
    latlng: [53.4831, -2.2441],
    // region: 'England'
  },
  {
    value: 'South East England',
    label: 'South East England',
    latlng: [51.2787, 0.5217],
    // region: 'England'
  },
  {
    value: 'South West England',
    label: 'South West England',
    latlng: [50.7374, -3.5353],
    // region: 'England'
  },
  {
    value: 'West Midlands',
    label: 'West Midlands',
    latlng: [52.4862, -1.8904],
    // region: 'England'
  },
  {
    value: 'Yorkshire and the Humber',
    label: 'Yorkshire and the Humber',
    latlng: [53.9590, -1.0815],
    // region: 'England'
  }
];
// flag: 'UK', //country.flag,


const useCountries = () => {
  const getAll = () => formattedRegions;

  const getByValue = (value: string) => {
    return formattedRegions.find((item) => item.value === value);
  }

  return {
    getAll,
    getByValue
  }
};

export default useCountries;