# Transaction API

This api for our react transaction app which is at `... link to react app repo`

...what this app is...

## How to use

1. clone this project by Running `git clone https://github.com/gyanu-sherchan-dev/financeTracker2.0.git`
2. Run `cd api-transaction`
3. Run `npm init`
4. Run `npm run dev`. You must have `nodemon` install in your system, otherwise run `npm i nodemon -g` to install globally

Now the project will be running at server `http://localhost:8000`

## API

This api server will have 2 api endpoints

1. User API
2. Transacting API

All the endpoint will follow the following path `{rooturl}/api/v1`.

### User API

User api will use the following path `{rooturl}/api/v1/user`. This api will allow client to create use, login and more.

| #   | PATH        | METHOD | IS PRIVATE | DESCRIPTION     |
| --- | ----------- | ------ | ---------- | --------------- |
| 1.  | '/register' | POST   | false      | create new user |

## Note:

1. private false means, anyone can access api, we gonna use that as a public route, but if nobody can access unless they are logged in user, with some authorization then they must be private.
2. we have 2 api here, we can combine both api or make multiple api's, rule of thump is see, how many table you need, from that you decide, at least you need same number of api's for each tables, this will help to seperate things easier and it will slowly shape you skills towards the microservice in future.
3. Because in table we do CRUD operation, we have different method for CRUD operation, one table - one CRUD

### Transaction API

Transaction api will use the following path `{rooturl}/api/v1/transaction`. This api will allow client to do CRUD, operation on transaction tabel.

| #   | PATH | METHOD | IS PRIVATE | DESCRIPTION                                                                                                            |
| --- | ---- | ------ | ---------- | ---------------------------------------------------------------------------------------------------------------------- |
| 1.  | '/'  | GET    | true       | allow user to fetch their own transaction only                                                                         |
| 2.  | '/'  | POST   | true       | allow user to post new transaction data should be send as `{}`                                                         |
| 3.  | '/'  | PATCH  | true       | ----------------                                                                                                       |
| 4.  | '/'  | DELETE | true       | allow user to delete single or multiple of their own transaction only. Client should send the data as `[id1, id2,...]` |
