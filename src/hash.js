import crypto from 'crypto';

export const calculateHash = (data) => {
  return crypto.createHash('sha256').update(data).digest('hex');
};

// function sayHello(name) {
//   const data = name.repeat(64);
//   console.log(data);
// }
// sayHello('ahmed');
