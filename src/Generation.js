// src/utils.js

export const generateCode = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let code = "";
  for (let i = 0; i < 6; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
};

export const getExpiryTime = (customMinutes = 30) => {
  const now = new Date();
  now.setMinutes(now.getMinutes() + customMinutes);
  return now.toISOString();
};
