export const fetchJson = async (input, options?) => {
  const res = await fetch(input, options);
  return res.json();
};
