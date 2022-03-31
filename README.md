# Guestbook

The API serves as an Oracle/Directory for thenewboston account user to attach cross-crypto currencies to their user account.

This serves as a place to verify the address and validity of profiles when trading/exchanging crypto.

Hosted API: https://w38piy.deta.dev/

## Getting Started

Clone the repo.

Install Node.js and required packages: `npm install`

Run the server: `npm run dev`

## Running Mongodb locally (docker)

$ docker pull mongo
$ docker run -d -p 27017:27017 --name example-mongo mongo:latest

## API Endpoints

`/api/v1/users`: Get account number and nonce assoited with the account number.

`/api/v1/auth`: Login using accountNumber and signature. Returns JWT.

`/api/v1/tokens`: Get all supported tokens.

`/api/v1/address`: CRUD crypto address of the user.

`/api/v1/profile/:username`: Get the public profile of the user.

`/api/v1/social_profile`: CRUD all social profiles associated with the user.

`/api/v1/profile_link`: CRUD all links associated with the user.

Happy Coding.
