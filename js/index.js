// Write your JS here
import test from './script2.js';

console.log('test');

test();

let database = firebase.database();
let databaseRef = database.ref('/');

databaseRef.once('value').then(function(snapshot)
{
const databaseValues = snapshot.val();

console.log(databaseValues);
document.write(databaseValues['dogs']);
});
