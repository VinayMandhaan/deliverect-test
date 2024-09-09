# Menu Web Application using React.js

## Design Decision

* Styling: The project uses Tailwind CSS for styling because it is easier and faster to write compared to regular CSS. Tailwind allows for the reuse of colors and other properties throughout the project, promoting consistency and reducing development time.

* Component-Based Architecture: The project has a main module, Menu, which is broken down into smaller components like MenuItem, Heading, Paragraph, and Price. If the project needs to support additional menus in the future, these modules can be reused, making the codebase easily scalable.

* State Management: Since there is only one API without any user-specific features, it was better to store the menu data in a global state, such as Context, and use that state across the components. Additionally, a custom hook was created for managing the cart to avoid duplicating functions across different modules. We could also create a dedicated context for the cart if needed.

* Unit Testing: React Testing Library was used for unit testing. Approximately 19 unit tests were written, focusing primarily on UI rendering and business logic for tasks like adding items to the cart, increasing quantity, searching, etc.

* TypeScript: Using TypeScript was beneficial for this project as it adds type safety, reducing the likelihood of runtime errors and making the code easier to maintain. 

 
## Steps To Run The Project

* Clone the repository
* Run yarn inside the project folder
* Run yarn start to run the project

## Steps To Run Unit Test

* Run yarn test to run all the unit test

## Demo

https://github.com/user-attachments/assets/ebbc1421-d07d-48a8-844e-98a77d6d1427

https://github.com/user-attachments/assets/4a02f7d3-5c3d-44cb-b207-af11da52187a




