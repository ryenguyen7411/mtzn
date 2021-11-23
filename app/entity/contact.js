export default function Contact (data) {
  const _data = data;

  this.get = (key) => {
    return _data[key];
  };
}
