
let database = firebase.database();
let databaseRef = database.ref('/');

let main = document.getElementById('main');

databaseRef.once('value').then(function(snapshot)
{
    const databaseValues = snapshot.val();

    for(let postKey in databaseValues.Posts){

        
        let currentPost = createPost(databaseValues.Posts[postKey]);
        
        console.log("Current Post: ", currentPost);

        $("#Posts").append(currentPost);
    }

    // document.write(databaseValues['Posts']['post 1']['Question']);
    $("#postPoll").click(function(){
        console.log("buttonClick")
    })
});

function createPost(post) {

    console.log("Post!!!");

    let choices = [];

    for(let choiceKey in post.Choices){
        choices.push(createChoice(post.Choices[choiceKey]));
    }

    return `<div>
        <h3>${post.Question}</h3>
        ${choices.join("")}
    </div>`
}


function createChoice(choice){
    return `<p>${choice.name}</p>`
}



