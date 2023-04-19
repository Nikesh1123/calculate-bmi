import { FileDataWriter } from '../fileDataWriter';
import { Person } from '../interfaces';
import { vol } from 'memfs';

jest.mock('fs', () => require('memfs').fs);

const outputJson = `[{"Gender":"Male","HeightCm":171,"WeightKg":96,"BMI":32.8,"BMICategory":"Moderately obese","HealthRisk":"Medium risk"}]`;

const dataWriter = new FileDataWriter('output.json');

test('writes JSON data to file correctly', () => {
  const data: Person[] = [
    {
      Gender: 'Male',
      HeightCm: 171,
      WeightKg: 96,
      BMI: 32.8,
      BMICategory: 'Moderately obese',
      HealthRisk: 'Medium risk',
    },
  ];

  dataWriter.write(data);
  const outputFileContent = vol.readFileSync('output.json', 'utf-8');
  expect(outputFileContent).toBe(outputJson);
});
