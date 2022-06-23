export const resetQueryString = () => {
  window.history.pushState({}, '', `${window.location.origin}`);
};
