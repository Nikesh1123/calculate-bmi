import fs from 'fs';
import { DataReader, Person } from './interfaces';

export class FileDataReader implements DataReader {
  private filename: string;
    
  constructor(filename: string) {
    this.filename = filename;
  }
  

  read(): Person[] {
    const rawData = fs.readFileSync(this.filename, 'utf8');
    return JSON.parse(rawData);
  }
}
