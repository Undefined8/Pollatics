
let database = firebase.database();
let databaseRef = database.ref('/');

let main = document.getElementById('main');

databaseRef.on('value',function(snapshot)
{
    const databaseValues = snapshot.val();
    $("#Posts").empty();
  
    for(let postKey in databaseValues.Posts){

        
        let currentPost = createPost(databaseValues.Posts[postKey]);
        
        console.log("Current Post: ", currentPost);

        $("#Posts").append(currentPost);
    }

    // document.write(databaseValues['Posts']['post 1']['Question']);
    // The post button 
    // $("#postPoll").click(function(){
    //     console.log("buttonClick")
    // })
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
    return `<p id="${choice.name}" >${choice.name}</p>`
}

$("#postPoll").click(function(){
    var ref = database.ref("/Posts");
    var Question = $("#Question").val();
    var Choice1 = $("#Choice1").val();
    var Choice2 = $("#Choice2").val();
    ref.push({
        Question:Question,
        Choices:{
            "Option 1":{
                name:Choice1
            },
            "Option 2":{
                name:Choice2
            }
        }


    })

    console.log("buttonClick")

})

$(document).on("click","#choice",function(){
    $("#choice").css("color","red")
    console.log("testing")
   

})


