import faker from 'faker';
import moment from 'moment';

export interface ColumnsProps {
  templateName: string;
  tipoTemp: string;
  dataExp: string;
  liderTemp: string;
  descTemp: string;
}

export const dataGrid: ColumnsProps[] = Array(20)
.fill(0)
.map((v, index) => ({
  templateName: faker.name.jobTitle(),
  tipoTemp: faker.name.jobArea(),
  dataExp: moment(faker.date.recent()).format('DD/MM/YYYY'),
  liderTemp: faker.name.firstName(),
  descTemp: faker.random.words(20)
}));
