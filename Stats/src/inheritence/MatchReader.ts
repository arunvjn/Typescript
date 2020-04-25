import { CSVFilterReader } from './CSVFileReader';
import { dataStringToDate } from '../utils';
import { MatchResult } from '../MatchResult';
export type MatchData = [Date, string, string, number, number, MatchResult, string];

export class MatchReader extends CSVFilterReader<MatchData> {
  constructor(fileName: string) {
    super(fileName);
  }
  mapRow(row: string[]): MatchData {
      return [
        dataStringToDate(row[0]),
        row[1], row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResult,
        row[6]
      ];
  }
}