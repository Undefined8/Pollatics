// Write your JS here
import test from './script2.js';

console.log('test');

test();

let database = firebase.database();
let databaseRef = database.ref('/');

let main = document.getElementById('main');

databaseRef.once('value').then(function(snapshot)
{
    const databaseValues = snapshot.val();
    
    console.log(databaseValues);
    
    for(let post in databaseValues.Posts){
        console.log("Post: ", post);
        
        //let currentPost = createPost(post);

        //$("#posts").append(currentPost);
    }
});

function createPost(post) {
    let choices = post.Choices.map(createChoice);
    
    return `<div>
        <h3>${post.Question}</h3>
        ${choices.join()}
    </div>`
}


function createChoice(choice){
    return `<p>${choice.name}</p>`
}