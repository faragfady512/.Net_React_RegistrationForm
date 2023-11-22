# BUE-Registration-Task

## Project Overview


![20231121_184146](https://github.com/faragfady512/.Net_React_RegistrationForm/assets/62870970/4d6c555c-1b95-44ae-b749-db797749bc60)


This project includes a responsive registration form for inserting and editing user data with form validation.
The web page also allows retrieval of inserted data. The registration form captures essential details such as Name, Email, Phone, and Age.

  ## Frontend:

- To access the source code on the client-side-app branch

- Developed using Reactjs with TypeScript.
  
- Components are structured following clean architecture principles.
  
- Utilizes libraries such as yup and react-hook-form for input validation.

 ## Installation
 
  1-Switch to the client-side-app branch.
  
  2-Install dependencies using npm i.
  
  3-Start the application with npm start.

## Backend:

- Built on .Net 5 , featuring a RESTful API in C#.
 
- Adopts a 3-tier architecture with business Logic Layer for interfaces and repositories, Data Acess Layer for entities and DbContext, and Presentation Layer web api .Net 5 project.
 
- Implements a Generic Repository Design Pattern for data interaction.
 
- Uses Entity Framework Core Code-First for integration with the MS SQL Server database.
 
- User DTOs are used to efficiently transfer and shape data between different layers of application ,makes separation of concerns,security
  
- input validation with using Regular Expressions and package like html.sanitizer package to ensure that user-inputted HTML content is safe, particularly with regard to cross-site scripting (XSS) attacks. 

- Controller helpers and AutoMapper extensions ensure clean mapping.

  ## Installation
  
  1-Navigate to the master branch.
  
  2-Open the solution and configure the connection string to your SQL Server.
  
  3-Run the solution.



