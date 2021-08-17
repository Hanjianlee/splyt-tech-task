## Splyt Tech Task App

### Notes:

For a smoother Experience, Please ensure that you are not running any localhosts :)

Ports in use for this App are 3000 (client), 8000(server)

### Steps to Start the Application

- #### Step 1

  - ##### Clone Repository
    ```console
    git clone https://github.com/Hanjianlee/splyt-tech-task.git
    ```

- #### Step 2

  - ##### Install Initial Package
    ```console
    npm install
    ```

- #### Step 3

  - ##### For Initial run (This step will install all necessary packages)
    ```console
    npm run all-init
    ```
  - ##### For subsequent runs
    ```console
    npm run all
    ```

### Steps to Run the Tests Application

#### Assuming that you have ran "npm run all-init"

- #### Step 1

  - ##### Execute Tests
    ```console
    npm run all-test
    ```

## Technology Stack Info  
### Languages Used 
  - #### Typescript

### Frontend 
  - #### create-react-app typescript - Frontend Framework
  - #### sass-css - styling preprocessor  
  - #### jest - For unit Tests
  - #### axios - To handle Backend Requests
  - #### react-redux - For state management 
  - #### react-saga - For Redux Middleware 
  - #### react-map-gl - For Map Creation 

### Backend
  - #### express-typescript - Backend Framework 
  - #### axios - To handle Requests to microservices 
  - #### cors - To handle CORS Origin Requests 
  - #### babel - To enable ES6 
  - #### ts-node - To run express with Typescript 

### Design Patterns
  - #### MVC Architecture for Backend with Express 
    - ##### (Although no model and view was created it can be integrated in the future with ease )

### Application Architecture