import { MatchReader } from './MatchReader';
import { CSVFilterReader } from './CSVFileReader';
import { Summary } from './Summary';
import { WinsAnalyser } from './analyzers/WinsAnalyser';
import { ConsoleReport } from './reportTargets/ConsoleReport';

const reader = new MatchReader(new CSVFilterReader('football.csv'));
reader.load();

const summary = new Summary(new WinsAnalyser('Man United'), new ConsoleReport());
summary.buildReport(reader.matches)
