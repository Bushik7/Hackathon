const FAVORITIES = "favorities";

export function addBookmark(id) {
  return localStorage.setItem(FAVORITIES, id);
}

const localStorageService = {
  addBookmark,
};

export default localStorageService;
