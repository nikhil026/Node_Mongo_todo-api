const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>
{
if(err)
{
  return console.log('Unable to connect to mongo Db');
}
console.log('Connected to mongodb Server');


db.collection('Users').findOneAndUpdate({_id:new ObjectID("58a8a86d49e322100cc9e725")},
{
 $inc: { age: 7},
 $set: {name:'Ravi'}
},
{
  returnOriginal:false
}).then((result=>{
  console.log(result);
})

)
// db.close();

});
