export const getToken = () => {
  return localStorage.getItem("kjoplkjh") || "";
};

export const setToken = (token: string) => {
  localStorage.setItem("kjoplkjh", token);
};

export const removeToken = () => {
  localStorage.removeItem("kjoplkjh");
};
