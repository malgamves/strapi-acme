# strapi-acme
A repository with a frontend app that has pre-filled Tailwind Components and a backend with Strapi that used Dynamic Zones to build out webpages in the frontend with zero developer effort 

This repo was inspired by this twitter [thread](https://twitter.com/malgamves/status/1358726235283722242?s=20).

## Getting Started

To get started clone the repo
```bash
git clone https://github.com/malgamves/strapi-acme.git
cd strapi-acme
```

The project has two folders `frontend` for your Nuxt frontend and `backend` for your Strapi backend.


### Frontend
The frontend is built with Nuxt. This sets up your frontend.
```bash
cd frontend

yarn install
```

Then run `yarn dev` to start your frontend server.

### Backend
The backend is built with Strapi. This sets up your backend.
```bash
cd backend

yarn install
```

Then run `yarn develop` to start your backend server.


## Deployment 

You can deploy your frontend by following the Nuxt [deployment guide](https://nuxtjs.org/guide/commands/#production-deployment).

For your backend, Strapi has numerous options in it's [deployment guide](https://strapi.io/documentation/3.0.0-beta.x/getting-started/deployment.html).


## Contributing

Feel free to send over a PR for any changes you think should be included.
