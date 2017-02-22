// const {ObjectID}=require('mongoodb');

const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');
 var id="58ad5af30dd2f025ecd50607";
// Todo.findById(id).then((todo))=>
// {
//   if(!todo)
// {return console.log('not found');
// }
// console.log('Todo',todo);
// }
Todo.find({
  _id:id
}).then((todo)=>{
  console.log('todos',todo);
});
