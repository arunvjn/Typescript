import { MatchData } from './MatchData';

export interface Analyser {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  analyser: Analyser;
  outputTarget: OutputTarget;
  constructor(analyser: Analyser, outputTarget: OutputTarget) {
    this.analyser = analyser;
    this.outputTarget = outputTarget;
  }

  buildReport(matches: MatchData[]) {
    let report = this.analyser.run(matches);
    this.outputTarget.print(report);
  }
}
