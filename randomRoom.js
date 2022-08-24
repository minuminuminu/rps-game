const example = "room?id=";

const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

const rdm = (hm) => {
  let result = "";

  for (let i = 5; i > 0; --i) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }

  console.log(result);
};

rdm(chars);
rdm(chars);
rdm(chars);
rdm(chars);
rdm(chars);
