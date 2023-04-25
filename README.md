
## Installation

### 1、Install dependency

```shell
$ npm install
// or 
$ yarn install
```

---

### 2、Setup MySQL configration

```ini
DB_HOST=127.0.0.1
DB_USER=username
DB_PASS=password
DB_NAME=database_name
```

---

### 3、Start server

read  `scripts` in `package.json`.

```shell
  ...
  "serve": "nodemon --config nodemon.json",
  "build": "webpack --mode=production --node-env=production",
  "deploy": "npm run build && serverless deploy",
  "build:dev": "webpack --mode=development",
  "build:prod": "webpack --mode=production --node-env=production",
  "clean": "rimraf ./dist/",
  "watch": "webpack --watch"
  ...
```

run `npm run serve`, then you will seen this below.
```shell
$ yarn serve
yarn run v1.22.19
warning package.json: No license field
$ nodemon --config nodemon.json
[nodemon] 2.0.22
[nodemon] reading config .\nodemon.json      
[nodemon] to restart at any time, enter `rs` 
[nodemon] or send SIGHUP to 17716 to restart 
[nodemon] watching path(s): index.js src\**\*
[nodemon] watching extensions: js,json,html  
[nodemon] starting `node ./index.js`
[nodemon] spawning
[nodemon] child pid: 26436
[nodemon] watching 5 files
Listen on http://localhost:3000/ ...
```

Open `http://localhost:3000/new_issue`  in browser.


other api see  [HttpApi](#httpapi)

---

## HttpApi

+ `GET /new_issue`
  - import new issue page

+ `POST /new_issue`
  - param `url`: google drive url

+ `GET /issues?date={issueDate}`
  - param `issueDate`: PDF issue date

+ `GET /cases`
  - param `fileSign`: PDF file Crc32
  - param `issueDate`: PDF issue date
  - param `page`: Page of PDF file
  - param `audienceNumber`: Audience number
  - param `audienceType`: Audience type
  - param `secretary`: secretary
  - param `numExp`: num. exp.
  - param `caseInfo`: case full body