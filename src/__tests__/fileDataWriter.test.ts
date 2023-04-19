import { FileDataWriter } from '../fileDataWriter';
import { Person } from '../interfaces';
import { vol } from 'memfs';

jest.mock('fs', () => require('memfs').fs);

const outputData = [
  {
    Gender: 'Male',
    HeightCm: 171,
    WeightKg: 96,
    BMI: 32.8,
    BMICategory: 'Moderately obese',
    HealthRisk: 'Medium risk',
  },
];

const dataWriter = new FileDataWriter('output.json');

beforeEach(() => {
  vol.mkdirSync('.', { recursive: true });
});

afterEach(() => {
  vol.reset();
});

test('writes JSON data to file correctly', () => {
  dataWriter.write(outputData);
  const outputFileContentBuffer = vol.readFileSync('output.json');
  const outputFileContent = outputFileContentBuffer.toString('utf-8');
  const parsedOutputFileContent = JSON.parse(outputFileContent);
  expect(parsedOutputFileContent).toEqual(outputData);
});
