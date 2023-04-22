## HttpApi

+ `GET /new_issues`
  - import new issue page

+ `POST /new_issues`
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