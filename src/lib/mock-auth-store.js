const globalForAuth = globalThis;

if (!globalForAuth.__mockUsers) {
  globalForAuth.__mockUsers = [
    {
      name: "Demo User",
      email: "demo@velora.com",
      password: "demo1234",
    },
  ];
}

const users = globalForAuth.__mockUsers;

export function findUserByEmail(email) {
  return users.find((user) => user.email.toLowerCase() === String(email).toLowerCase());
}

export function createUser({ name, email, password }) {
  const user = { name, email, password };
  users.push(user);
  return user;
}
