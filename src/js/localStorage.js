export const saveToLocalStorage = (key, value) => {
  if (typeof Storage !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  } else {
    console.error("LocalStorage is not working");
  }
};

export const loadFromLocalStorage = (key) => {
  if (typeof Storage !== "undefined") {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : null;
  } else {
    console.error("LocalStorage is not working");
    return null;
  }
};

export const removeFromLocalStorage = (key) => {
  if (typeof Storage !== "undefined") {
    localStorage.removeItem(key);
  } else {
    console.error("LocalStorage is not working.");
  }
};
