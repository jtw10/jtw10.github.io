// https://firebase.google.com/docs/web/setup
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

        // these two if statements will make sure the comment card and name are not left blank
        if (name == ' '){
            name = "Secret Admirer"
        }
        if (comments == ''){
            comments = "It's beautiful and I like it"
        }

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
    "no good", "shit", "fuck", "bitch", "josh", "Josh", "JOSH", "JoSh", "JOsH", "JosH"];



function reloadPage() {
    window.location.reload()
}

function toggletext(){
    var x = document.getElementById("toggle");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

// document.getElementById("commentbox").reset();

