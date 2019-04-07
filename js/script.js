var db = firebase.firestore();

function addData(){
    alert("Thank you for your feedback!");
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var rating = document.getElementById("rating").value;
    var comments = document.getElementById("comments").value;

    console.log(rating);

    db.collection("comments").add({
        firstname: fname,
        lastname: lname,
        rating: rating,
        comments: comments
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        })
    .catch(function(error) {
        console.error("Error adding comment: ", error);
    });
}


var vip = ["Richard", "richard", "Rich", "rich", "Hart", "hart"];
var jimbob = ["jimmy", "jim"];
// using a list of bad words to filter negative comments
var badwords = ["bad", "negative", "no", "horrible", "terrible", "disgusting", "filter", "unforgivable", "nasty",
    "no good", "shit", "fuck", "bitch"];


fname.addEventListener('input', function(){
    var name = document.getElementById("fname").value;
    var num = vip.indexOf(name);
    console.log(name);
    if(num != -1){
        alert("Hello Rich! Welcome to my website")
    }
    else{
        var result = "no"
    }
});


lname.addEventListener('input', function(){
    var name = document.getElementById("lname").value;
    var num = vip.indexOf(name);
    console.log(name);
    if(num != -1){
        alert("Hello Mr. Hart! Welcome to my website")
    }
    else{
        var result = "no"
    }
});


comments.addEventListener('input', function(){
    var words = document.getElementById("comments").value;
    console.log(words);
    if(badwords.includes(words.toLowerCase())){
        alert("Please use friendly language. Thank you!");
        document.getElementById("commentbox").reset();
    }
    else{
        var result = "no"
    }
});


fname.addEventListener('input', function(){
    var name = document.getElementById("fname").value;
    var num = jimbob.indexOf(name);
    console.log(name);
    if(num != -1){
        document.getElementById("commentbox").reset();
    }
    else if(name == "niku" || name == "Niku" || name == "NIKU"){
        alert("Hi Niku!");
        alert("OwO");
        alert("UwU");
        alert("You are a potato!!!");
        document.getElementById("commentbox").reset();
    }
    else if(name == "Aaron" || name == "aaron" || name == "AARON"){
        alert("안녕하세요, 사랑해요 오빠!~~");
    }
    else{
        var result = "no"
    }
});


function reloadPage() {
    window.location.reload()
}


// document.getElementById("commentbox").reset();
// document.getElementById("submit").addEventListener("click", reloadPage());
