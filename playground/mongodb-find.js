const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>
{
if(err)
{
  return console.log('Unable to connect to mongo Db');
}
console.log('Connected to mongodb Server');

// db.collection('Todos').find({
//   _id: new ObjectID('58a8a55e3d7f3330ec0cbeb7')
// }).toArray().then((docs)=>
//   {
//     console.log('Todos');
//     console.log(JSON.stringify(docs,undefined,2));
//   },(err)=>{
//     console.log('Unable to fetch',err);
//   });
// console.log()
// db.close();

db.collection('Todos').find().count().then((count)=>
  {
    console.log(`Todos count:  ${count}`);

  },(err)=>{
    console.log('Unable to fetch',err);
  });
console.log()
db.close();

});
