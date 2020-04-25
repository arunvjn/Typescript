import fs from 'fs';

export abstract class CSVFilterReader<T> {
  constructor(fileName: string) {
    this.fileName = fileName;
  }
  abstract mapRow(row: string[]): T;

  fileName: string;
  data: T[] = [];

  read(): void {
    this.data = fs
      .readFileSync(this.fileName, { encoding: 'utf-8' })
      .split('\n')
      .map((match: string): string[] => match.split(','))
      .map(this.mapRow);
  }

}