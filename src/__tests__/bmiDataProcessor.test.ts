import { BMIDataProcessor } from "../bmiDataProcessor";
import { Person, BMICategory } from "../interfaces";

const bmiCategories: BMICategory[] = [
  { category: "Underweight", range: [0, 18.4], risk: "Malnutrition risk" },
  { category: "Normal weight", range: [18.5, 24.9], risk: "Low risk" },
  { category: "Overweight", range: [25, 29.9], risk: "Enhanced risk" },
  { category: "Moderately obese", range: [30, 34.9], risk: "Medium risk" },
  { category: "Severely obese", range: [35, 39.9], risk: "High risk" },
  {
    category: "Very severely obese",
    range: [40, Infinity],
    risk: "Very high risk",
  },
];

const dataProcessor = new BMIDataProcessor(bmiCategories);

test("calculates BMI, BMI Category, and Health Risk correctly", () => {
  const input: Person[] = [
    { Gender: "Male", HeightCm: 171, WeightKg: 96 },
    { Gender: "Female", HeightCm: 166, WeightKg: 62 },
  ];

  const { processedData } = dataProcessor.process(input);

  expect(processedData).toEqual([
    {
      Gender: "Male",
      HeightCm: 171,
      WeightKg: 96,
      BMI: 32.8,
      BMICategory: "Moderately obese",
      HealthRisk: "Medium risk",
    },
    {
      Gender: "Female",
      HeightCm: 166,
      WeightKg: 62,
      BMI: 22.5,
      BMICategory: "Normal weight",
      HealthRisk: "Low risk",
    },
  ]);
});

test("counts overweight people correctly", () => {
  const input: Person[] = [
    { Gender: "Male", HeightCm: 171, WeightKg: 96 },
    { Gender: "Female", HeightCm: 166, WeightKg: 62 },
  ];

  const { overweightCount } = dataProcessor.process(input);

  expect(overweightCount).toBe(0);
});
