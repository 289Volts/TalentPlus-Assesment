# Tech Time - TalentPlus frontend developer assessment

This project is an assessment set up to test the skills of a frontend developer. This assesment is in 3 parts,

- Develop the design that was sent in the initial assessment invite mail.
- Dockerize the app by creating a docker file and explain in a README file how to build and run the app in docker.
- Record a video not more than 8 mins long showcasing the landing page and the docker setup.

## Tech Stack

**Client:** [NextJs](https://nextjs.org/docs/getting-started), [TailwindCss](https://https://tailwindcss.com/docs/installation), [Swiper Js](https://https://https://swiperjs.com/react), [React-collapse](https://www.npmjs.com/package/react-collapse),

## Run Locally

Firstly, clone the repo on your local machine by running

```bash
  git clone https://github.com/289Volts/TalentPlus-Assesment.git
```

Go to the project directory

```bash
  cd name-of-project
```

- Then install the dependencies by running

```bash
  npm install or yarn install
```

- To spin up the development server, you need to run

```bash
  npm run dev or yarn dev
```

Congratulations! If you followed these steps, then you can go to your browser and load the app on [localhost:3000](https://localhost:3000) in your browser.

### To run this app in Docker

After cloning on your local machine, create a docker-compose.yml file in the root folder where this project folder is.
Example: If you are cloning this project into your Documents folder, the docker-compose.yaml file will be in the Documents folder and not in the project folder.

- In the file, you need to create a service to explain what your app is made up of. These are the contents of the file

```bash
  version: "3.9"
services:
  tech-time:
    build: ./talentplus-assesment
    container_name: techTime_c  # this is a name for the container
    ports:
      - "3000:3000"
    stdin_open: true
    tty: true
    command: npm start
```

Meaning of the rules in the compose file.

```bash
version: this is the version of the docker-compose file.
tech-time: this is the service name.
build: this line tells Docker to build the image from the docker file in the app directory.
ports: this is the port you are exposing your app to. The port it should be mapped to which is the port number of the host
stdin_open: this is an instruction to keep the app running indefinitely
tty: this is an instruction to keep the app running indefinitely
command: specifies the command to run inside the container when it starts up. This will start your app.
```

After you create the docker-compose.yml file, run the command to build the container

```bash
  docker-compose up
```

- Once that's done, proceed to load up the app in your browser through [localhost:3000](https://localhost:3000).
