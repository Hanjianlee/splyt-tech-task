## Splyt Tech Task App

### Requirements:

No instances running on 3000,8000. <br/>
Ports in use are for this App are 3000 (client), 8000(server)

### Preffered Browser 

Google Chrome 

### Steps to Start the Application

- #### Step 1

  - ##### Clone Repository
    ```console
    git clone https://github.com/Hanjianlee/splyt-tech-task.git
    ```

- #### Step 2

  - ##### Change Directory in to splyt-tech-task (or directory name given when cloned)
    ```console
    cd splyt-tech-task
    ```

- #### Step 3

  - ##### Install Initial Package
    ```console
    npm install
    ```

- #### Step 4

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

### UI Visual Aid
   #### Top Left Shows the switches to switch between HQ
   #### The Second Item Allows Users to Adjust the Taxi Count
   #### The Top right Item Allows Users to check location access details 

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
![splyt-tech-task-Page-2 (1)](https://user-images.githubusercontent.com/36333538/129743600-ff5aebe2-fe6a-4b21-a4ce-7b9591838608.png)

### Constraints 
  - #### This application was built on windows hence Safari faces some issue with obtaining location accesss

