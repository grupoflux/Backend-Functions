# Backend-Functions
AWS Backend Functions

## S3HashMap-PutItem

Function that reads a json stream and unmarshal it into an S3 Bucket named by an identifier unique hash, right now the json is formated to be readed as :

```
{
  "id": "1234678",
  "payload": [
    {
      "nome": "asdasdasds",
      "idade": "20"
    }
  ]
}
```
## DynamoDB-POST

Function that read a json stream and unmarshal it on an DynamoDB table, creating a new user, right now the json is formated to be readed as :

```
{
  "dados": {
    "nome": "Gustavo Belfort",
    "idade": 20
  },
  "premium": "1"
}
```
