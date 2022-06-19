/* eslint-disable import/prefer-default-export */
export const definePathNameProperty = (pathname: string) => {
  Object.defineProperty(window, 'location', {
    get() {
      return { pathname };
    },
  });
};

export const defineSearchProperty = (queryString: string) => {
  Object.defineProperty(window, 'location', {
    get() {
      return { search: queryString };
    },
  });
};
