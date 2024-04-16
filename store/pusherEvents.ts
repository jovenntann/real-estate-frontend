import { useMessagesStore } from '~/store/messages';
import Pusher from 'pusher-js';

export const usePusherEventsStore = defineStore('pusherEventsStore', () => {
  const { addMessageToList } = useMessagesStore();

  const pusher = new Pusher(useRuntimeConfig().public.clerkPublishableKey as string, {
    cluster: 'ap1',
    forceTLS: true
  });

  onMounted(() => {
    const channel = pusher.subscribe('my-channel');
    channel.bind('new-message', (data: any) => {
      console.log(data);
      addMessageToList(data);
    });
  }); 

  return {};
});
