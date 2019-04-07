var db = firebase.firestore();

function addData(){
    alert("Thank you for your comments!");
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



function reloadPage()
{
    window.location.reload()
}


// document.getElementById("commentbox").reset();
// document.getElementById("submit").addEventListener("click", reloadPage());
