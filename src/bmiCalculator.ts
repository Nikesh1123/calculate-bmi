import { BMIDataProcessor } from './bmiDataProcessor';
import { FileDataReader } from './fileDataReader';
import { FileDataWriter } from './fileDataWriter';
import { DataProcessor, DataReader, DataWriter, Person, BMICategory } from './interfaces';

const bmiCategories: BMICategory[] = [
  { category: 'Underweight', range: [0, 18.4], risk: 'Malnutrition risk' },
  { category: 'Normal weight', range: [18.5, 24.9], risk: 'Low risk' },
  { category: 'Overweight', range: [25, 29.9], risk: 'Enhanced risk' },
  { category: 'Moderately obese', range: [30, 34.9], risk: 'Medium risk' },
  { category: 'Severely obese', range: [35, 39.9], risk: 'High risk' },
  { category: 'Very severely obese', range: [40, Infinity], risk: 'Very high risk' },
];

const dataProcessor: DataProcessor = new BMIDataProcessor(bmiCategories);
// console.log(process.cwd())
const dataReader: DataReader = new FileDataReader('input.json');
const dataWriter: DataWriter = new FileDataWriter('output.json');

const data: Person[] = dataReader.read();
const { processedData, overweightCount } = dataProcessor.process(data);

console.log('Processed Data:', processedData);
console.log('Total number of overweight people:', overweightCount);

dataWriter.write(processedData);
