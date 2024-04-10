import { defineStore } from 'pinia';

export const useFiltersStore = defineStore('filterStore', () => {
  const filtersList = ref(['youtube', 'twitch']);

  function addValueToFilterList(value: string) {
    filtersList.value.push(value);
  }

  function removeValueFromFilterList(value: string) {
    const index = filtersList.value.indexOf(value);
    if (index > -1) {
      filtersList.value.splice(index, 1);
    }
  }

  return { addValueToFilterList, removeValueFromFilterList, filtersList };
});
