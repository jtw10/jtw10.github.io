// https://firebase.google.com/docs/web/setup
var db = firebase.firestore();
var fbcomment = db.collection("comments");

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


db.collection("comments").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        var a = doc.data();
        console.log(a);
    });
});


const collection = db.collection('comments');
collection.get().then(snapshot => {
    snapshot.forEach(doc => {
        // console.log( doc.data().firstname );
        // console.log( doc.data().lastname );
        // console.log( doc.data().rating );
        // console.log( doc.data().comments );
        var dbo = Object.assign({ uid: doc.id }, doc.data());
        var first_name = dbo.firstname;
        var last_name = dbo.lastname;
        var rating = dbo.rating;
        var comments = dbo.comments;
        var name = first_name + ' ' + last_name;

        var div = document.createElement("div");

        div.innerHTML =
            '<div class="container">\n' +
            '<div class="card">\n' +
            '<div class="card-body">\n' +
            '<div class="row">\n' +
            '<div class="col-md-10">\n' +
            '<h4 class="float-left" style="color: lightblue"><strong>' + name + '</strong></h4>\n' +
            '<div class="clearfix"></div>\n' +
            '<h6 class="float-left" style="color: lightcyan"><strong>' + rating + '</strong></h6>\n' +
            '<div class="clearfix"></div>\n' +
            '<p>' + comments + '</p>\n' +
            '</div>\n' +
            '</div>\n' +
            '</div>\n' +
            '</div>\n' +
            '</div>';

        document.body.appendChild(div);
    });
    var spacing = document.createElement("spacing");
    spacing.innerHTML =
        '<br><br><br><br><br>';
    document.body.append(spacing);
});



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
    else if(name.toLowerCase() == "bryan" || name.toLowerCase() == "ramon"){
        alert("你很美丽!~~ XD");
    }
    else if(name == "Jimmy" || name == "Jim"){
        alert("Everyday is 星期七!!~~ :3");
    }
    else if(name.toLowerCase() == "dhruv" || name.toLowerCase() == "mehtab" || name.toLowerCase() == "tub"){
        alert("नमस्ते तुम सबसे महान हो");
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
