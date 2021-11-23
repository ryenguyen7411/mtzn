import { useDispatch, store } from 'infra/storage';

export default function ExampleRepo (entity, storage) {
  const dispatch = useDispatch();

  this.getQuote = () => {
    const quote = storage.Example().getQuote();
    return quote;
  };

  this.fetchQuote = async () => {
    const key = 'quote';

    const state = store.getState();
    if (state.example[key]) return;

    const [SUCCESS, PENDING, FAILED] = storage.Example().fetchQuote.actions;
    dispatch(PENDING({ key }));

    // mimic API fetch
    const res = await new Promise((resolve) => {
      setTimeout(() => resolve({
        ok: true,
        body: {
          data: {
            id: 1,
            text: 'Great things take times. And for the greatest, it also take heart and mind.',
          },
        },
      }), 2000);
    });

    if (res.ok) dispatch(SUCCESS({ key, ...res.body }));
    else dispatch(FAILED({ key, ...res.body }));
  };

  this.getContacts = () => {
    const contacts = storage.Example().getContacts();
    if (contacts?.status !== 'SUCCESS') return contacts;
    return { ...contacts, data: contacts.data.map((contact) => new entity.Contact(contact)) };
  };

  this.fetchContacts = async () => {
    const key = 'contacts';

    const state = store.getState();
    if (state.example[key]) return;

    const [SUCCESS, PENDING, FAILED] = storage.Example().fetchContacts.actions;
    dispatch(PENDING({ key }));

    // mimic API fetch
    const res = await new Promise((resolve) => {
      setTimeout(() => resolve({
        ok: true,
        body: {
          data: [
            {
              id: 1,
              name: 'Rye Nguyen',
              avatar: '/images/placeholder.png',
              githubUrl: 'https://github.com/ryenguyen7411',
            },
          ],
        },
      }), 2000);
    });

    if (res.ok) dispatch(SUCCESS({ key, ...res.body }));
    else dispatch(FAILED({ key, ...res.body }));
  };
}
