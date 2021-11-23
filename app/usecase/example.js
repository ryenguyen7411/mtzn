export default function ExampleUsecase (repo) {
  this.getQuote = () => {
    return repo.Example().getQuote();
  };

  this.fetchQuote = () => {
    return repo.Example().fetchQuote();
  };

  this.getContacts = () => {
    return repo.Example().getContacts();
  };

  this.fetchContacts = () => {
    return repo.Example().fetchContacts();
  };
}
