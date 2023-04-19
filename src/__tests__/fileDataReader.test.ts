import { FileDataReader } from '../fileDataReader';
import { vol } from 'memfs';

jest.mock('fs', () => require('memfs').fs);

const inputJson = `[{"Gender": "Male", "HeightCm": 171, "WeightKg": 96}]`;
vol.fromJSON({ 'input.json': inputJson });

const dataReader = new FileDataReader('input.json');

test('reads JSON data from file correctly', () => {
  const data = dataReader.read();

  expect(data).toEqual([
    {
      Gender: 'Male',
      HeightCm: 171,
      WeightKg: 96,
    },
  ]);
});
