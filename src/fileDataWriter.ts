import fs from 'fs';
import { DataWriter, Person } from './interfaces';

export class FileDataWriter implements DataWriter {
  private filename: string;

  constructor(filename: string) {
    this.filename = filename;
  }

  write(data: Person[]): void {
    fs.writeFileSync(this.filename, JSON.stringify(data, null, 2));
  }
}
