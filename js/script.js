function addData(){ alert("Thank you for your comments!");
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var rating = document.getElementById("rating").value;
    var comments = document.getElementById("comments").value;
    db.collection("comments").add({
        firstname: fname,
        lastname: lname,
        rating: rating,
        comments: comments
    })
}