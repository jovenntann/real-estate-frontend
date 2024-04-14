import Pusher from 'pusher-js';

export default function() {
  const pusher = new Pusher('e66107be59b1baade46a', {
    cluster: 'ap1',
    forceTLS: true
  });

  const channel = pusher.subscribe('your-channel');

  return { pusher, channel };
}