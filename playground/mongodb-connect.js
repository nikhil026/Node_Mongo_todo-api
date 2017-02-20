const MongoClient=require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>
{
if(err)
{
  return console.log('Unable to connect to mongo Db');
}
console.log('Connected to mongodb Server');
//
db.collection('Todos').insertOne({
text:'can you see me',
completed:true},(err,result)=>
{
if(err)
{return console.log('Unable to insert',err);
}
console.log(JSON.stringify(result.ops,undefined,2));
});
db.collection('Users').insertOne(
  {

name:'Check It',
age:21
  },
  (err,result)=>{if(err)
    {
      return console.log('Unable to Insert',err);
    }
    console.log(JSON.stringify(result.ops,undefined,2));
    console.log(result.ops[0]._id.getTimestamp());

  }
);
// db.collection('Users')
// .find({name:'Nikhil'})
// .toArray()
// .then((docs)=>
// {
// console.log(JSON.stringfy(docs,undefined,2));
// });
//db.close();
});
