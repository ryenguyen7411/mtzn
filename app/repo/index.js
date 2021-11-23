import Entity from 'entity';
import Storage from 'infra/storage';
import ExampleRepo from './example';

export default function Repo () {
  const entity = new Entity();
  const storage = new Storage();

  const example = new ExampleRepo(entity, storage);
  this.Example = () => example;
}
