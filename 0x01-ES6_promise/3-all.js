import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup() {
  return Promise.all([createUser(), uploadPhoto()])
    .then(([acc, res]) => {
      console.log(`${res.body} ${acc.firstName} ${acc.lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
