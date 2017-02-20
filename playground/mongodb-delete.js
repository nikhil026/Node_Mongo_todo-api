const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>
{
if(err)
{
  return console.log('Unable to connect to mongo Db');
}
console.log('Connected to mongodb Server');

db.collection('Todos').deleteMany({text:'Nothing To do'}).then((res)=>
{console.log(res)}
);
//db.close();

});
