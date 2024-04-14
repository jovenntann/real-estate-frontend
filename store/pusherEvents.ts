import usePusher from '~/plugins/pusher.client';
import { useMessagesStore } from '~/store/messages';

export const usePusherEventsStore = defineStore('pusherEventsStore', () => {
  const { addMessageToList } = useMessagesStore();

  const { pusher } = usePusher();

  onMounted(() => {
    const channel = pusher.subscribe('my-channel');
    channel.bind('new-message', (data: any) => {
      console.log(data);
      addMessageToList(data);
    });
  });

  return {};
});

