import pad from "one-time-pad";

export const oneTimePadEncryption = (value) => {
  return pad.encrypt(value, process.env.REACT_APP_SECRET_KEY);
};

export const oneTimePadDecryption = (value) => {
  return pad.decrypt(value, process.env.REACT_APP_SECRET_KEY);
};
