export interface Person {
  Gender: string;
  HeightCm: number;
  WeightKg: number;
  BMI?: number;
  BMICategory?: string;
  HealthRisk?: string;
}

export interface BMICategory {
  category: string;
  range: [number, number];
  risk: string;
}

export interface DataProcessor {
  process(data: Person[]): { processedData: Person[]; overweightCount: number };
}

export interface DataReader {
  read(): Person[];
}

export interface DataWriter {
  write(data: Person[]): void;
}
