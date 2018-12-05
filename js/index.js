
let database = firebase.database();
let databaseRef = database.ref('/');

let main = document.getElementById('main');

databaseRef.on('value',function(snapshot)
{
    const databaseValues = snapshot.val();
    $("#Posts").empty();
  
    for(let postKey in databaseValues.Posts){
        createPost(databaseValues.Posts[postKey]);
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
    let result = $(`<div><h3>${post.Question}</h3></div>`)

    

    for(let choiceKey in post.Choices){
        result.append(createChoice(post.Choices[choiceKey]));
    }

    $("#Posts").append(result);

    console.log("Current Post:", $("#Posts"));
}

function onResponse(buttonRef){
    console.log('responded');
}

function createChoice(choice){

    let button = $(`<button id="${choice.name}">${choice.name}</button>`);

    let choiceDiv = `<div class="choice"></div>`;

    button.click(() => {
        console.log("responded");
    })

    console.log($(choiceDiv).append(button));

    return $(choiceDiv).append(button);
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


