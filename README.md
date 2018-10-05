# Backend-Functions
AWS Backend Functions

# S3HashMap-PutItem

Function that reads a json stream and unmarshal it into an S3 Bucket named by an identifier unique hash, right now the json is formatetd to be readed as :

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