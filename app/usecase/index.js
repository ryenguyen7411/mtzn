import ExampleUsecase from './example';

export default function Usecase (repo) {
  const example = new ExampleUsecase(repo);
  this.Example = () => example;
}
