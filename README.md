# NestJS and Angular

## Install Node 24

```shell
nvm install 24
nvm use 24
```

## Start backend

```shell
cd backend 
npm i
npm run start:dev
```

## Start frontend

```shell
cd frontend
npm i
npm start
```

## Test login API
```shell
curl -X POST -H "Content-Type: application/json"  --data '{"email": "user@example.com", "password": "password"}' 
http://localhost:3000/api/login
```
