import fs from 'fs';

export class CSVFilterReader {
  constructor(fileName: string) {
    this.fileName = fileName;
  }

  fileName: string;
  data: string[][] = [];

  read(): void {
    this.data = fs
      .readFileSync(this.fileName, { encoding: 'utf-8' })
      .split('\n')
      .map((match: string): string[] => match.split(','));
  }

}