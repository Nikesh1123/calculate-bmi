import { DataProcessor, Person, BMICategory } from './interfaces';

export class BMIDataProcessor implements DataProcessor {
  private bmiCategories: BMICategory[];

  constructor(bmiCategories: BMICategory[]) {
    this.bmiCategories = bmiCategories;
  }
  private calculateBMI(heightCm: number, weightKg: number): number {
    const heightM = heightCm / 100;
    return weightKg / (heightM * heightM);
  }

  private getBMICategoryAndRisk(bmi: number) {
    for (const cat of this.bmiCategories) {
      if (bmi >= cat.range[0] && bmi <= cat.range[1]) {
        return { BMICategory: cat.category, HealthRisk: cat.risk };
      }
    }
    return { BMICategory: '', HealthRisk: '' };
  }

  process(data: Person[]): { processedData: Person[]; overweightCount: number } {
    let overweightCount = 0;

    const processedData = data.map((person) => {
      const bmi = this.calculateBMI(person.HeightCm, person.WeightKg);
      const { BMICategory, HealthRisk } = this.getBMICategoryAndRisk(bmi);

      if (BMICategory === 'Overweight') {
        overweightCount++;
      }

      return { ...person, BMI: parseFloat(bmi.toFixed(1)), BMICategory, HealthRisk };
    });

    return { processedData, overweightCount };
  }
}
