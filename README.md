# IPREO Angular Exercize

Software Engineer Coding Challenge - Data Permissioning

## Getting Started

The following instructions will get you a copy of the IPREO Angular Exercize project up and running on your local machine for development and testing purposes.

### Prerequisites

The following is needed

```
Visiual Studio Code 
Node.JS Framework
Angular 4 
Mocha (unit test framework)
```

### Running The Project

Open the project using Visual Studio Code...


```
Open Powershell or GitBash
Build and start the web server: ng serve 
Application should be accessible here: http://localhost:4200/  (a different port maybe assigned)

```

### Logging in - Usernames/Passwords

```
Client A:
Username: ClientA  (not case sensitive)
Password: clienta  (case sensitive)
```

```
Client B:
Username: ClientB  (not case sensitive)
Password: clientb  (case sensitive)
```

```
Administrator:
Username: Admin    (not case sensitive)
Password: admin    (case sensitive)
```

### Roles

Admin login gives the ability of controlling user permissions. 

## Running the tests

From powershell/gitbash, execute 'npm run test', this will fire up macho and execute the project's unit tests.

### Unit Test break down

The tests are simple and testing

```
1. Authenticate User - taking username and password as parameters
2. Remove User Index Access - The process of controlling permissions, removing user from given Index.
3. Update User Index Access - The process of controlling permissions, adding user to the given Index.
```
