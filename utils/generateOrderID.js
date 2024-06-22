const shortid = require('shortid');

const generateRandomString = (length) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
  return result;
};

const generateOrderID = () => {
  const now = new Date();
  const year = now.getFullYear();
  const day = String(now.getDate()).padStart(2, '0'); 

  const timestamp = `${year}${day}`; 
  const randomString = generateRandomString(8); 

  const orderId = `${timestamp}${randomString}`;

  return orderId;
};

module.exports = generateOrderID;
