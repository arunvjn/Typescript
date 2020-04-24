interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}

interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'Civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name ${this.name} from ${this.year}`;
  },
};

const drink = {
  color: 'brown',
  carbon: true,
  sugar: 40,
  summary(): string {
    return `Color ${this.color}`;
  },
};

const printDetails = ({
  name,
  year,
  broken,
}: {
  name: string;
  year: number;
  broken: boolean;
}): void => console.log(`Name: ${name}  Year: ${year} Broken: ${broken}`);
// The type annotation on the funtion is huge. Fix is to create interface

const printDetailsUsingInterface = ({ name, year, broken }: Vehicle): void =>
  console.log(`Name: ${name}  Year: ${year} Broken: ${broken}`);

const printDetailsUsingInterfaceReportable = ({
  summary,
}: Reportable): string => summary();

printDetailsUsingInterface(oldCivic);
