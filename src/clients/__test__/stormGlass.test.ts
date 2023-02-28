import { StormGlass } from '@src/clients/stormGlass';
import stormGLassNormalizedWeather3HoursFixture from '@test/fixtures/stormglass_normalized_weather_3_hours.json';
import stormGLassWeather3HoursFixture from '@test/fixtures/stormglass_weather_3_hours.json';
import axios from 'axios';
jest.mock('axios');

describe('StormGlass client', () => {
  it('should return the normalize forecast from the StormGlass service', async () => {
    const lat = -44.232346;
    const lng = 123.123123;

    axios.get = jest
      .fn()
      .mockResolvedValue({ data: stormGLassWeather3HoursFixture });

    const stormGlass = new StormGlass(axios);
    const response = await stormGlass.fetchPoints(lat, lng);
    expect(response).toEqual(stormGLassNormalizedWeather3HoursFixture);
  });
});
