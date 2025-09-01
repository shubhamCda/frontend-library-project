enum Roles {
  user = "user",
  admin = "admin"    
}

type LoginDetails = {
  name?: string;
  email: string;
  password: string;
  role: Roles;
}

const user1:LoginDetails = {
  email: "shubham@gmail.com",
  password: "qwerty",
  role: Roles.admin,
}

const user2:LoginDetails = {
  email: "shubham@gmail.com",
  password: "qwty",
  role: Roles.user,
}


const isAdmin = (user: LoginDetails) => {
  const { email, role } = user;

  return role === "admin" ? `You can use ${role} page.` : `You can use ${role} page.`
}

console.log(isAdmin(user1));
console.log(isAdmin(user2));

