## Splyt Tech Task App

### Notes:

For a smoother Experience, Please ensure that you are not running any localhosts :)

Ports in use for this App are 3000 (client), 8000(server)

### Steps to Start the Application

- #### Step 1

  - ##### Clone Repository

    $ git clone https://github.com/Hanjianlee/splyt-tech-task.git

- #### Step 2

  - ##### Install Initial Package

    $ npm install

- #### Step 3

  - ##### For Initial run (This step will install all necessary packages)

    $ npm run all-init

  - ##### For subsequent runs

    $ npm run all

- #### Step 4

  - ##### For Initial run (This step is to continue to localhost)

    Chrome --> click on "Advanced" --> "Proceed to localhost:3000(unsafe)"

    Firefox --> click on "Advanced" --> "Proceed to localhost:3000(unsafe)"

    Safari --> click on "Show Details" --> "Visit the website" --> "Visit Website"

### Steps to Run the Tests Application

#### Assuming that you have ran "npm run all-init"

- #### Step 1

  - ##### Execute Tests

    $ npm run all-test
