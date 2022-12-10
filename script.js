login= prompt ("Enter login: ");
pass= prompt ("Enter pass");
var name = "admin";
var password = "pass";

if (login == name && pass == password)
{
  document.write('Welcome, ' +login)
}
else if (login == name && pass != password)
{
    document.write('Password is wrong!')
}
else if (login != name)
{
    document.write('Login is wrong!')
}
