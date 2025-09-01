var Roles;
(function (Roles) {
    Roles["user"] = "user";
    Roles["admin"] = "admin";
})(Roles || (Roles = {}));
var user1 = {
    email: "shubham@gmail.com",
    password: "qwerty",
    role: Roles.admin,
};
var user2 = {
    email: "shubham@gmail.com",
    password: "qwty",
    role: Roles.user,
};
var isAdmin = function (user) {
    var email = user.email, role = user.role;
    return role === "admin" ? "You can use ".concat(role, " page.") : "You can use ".concat(role, " page.");
};
console.log(isAdmin(user1));
console.log(isAdmin(user2));
