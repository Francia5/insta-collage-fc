// Initialize Firebase
var config = {
    apiKey: "AIzaSyBSDVhOYV9IFXcjWJhiTIvD02Orm_c-1zU",
    authDomain: "insta-collage-7996e.firebaseapp.com",
    databaseURL: "https://insta-collage-7996e.firebaseio.com",
    projectId: "insta-collage-7996e",
    storageBucket: "insta-collage-7996e.appspot.com",
    messagingSenderId: "1047622379327"
};
firebase.initializeApp(config);

// function login (click) {
//     var btn = document.getElementById('login');
//     btn.addEventListener('click');
//     firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
//         // Handle Errors here.
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         // ...
//     });

//     firebase.auth().signOut().then(function () {
//         // Sign-out successful.
//     }).catch(function (error) {
//         // An error happened.
//     });
// }

$(document).ready(() => {
    $("#signup").click(() => {
        let email = $("#email").val();
        let password = $("#password").val();

        if (password == 123456) {
            swal("Error ", " The password can not be 123456, empty field or have less than 6 characters", "error");
            let passwordInput = $("#password").val("");
        } else {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .catch((error) => {
                    alert("the email or the password is incorrect");
                })
        }



    })       

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            $("#user").text(user.email);
            window.location = "app.html";
        } else {
            $("#user").text("");
        }
    })

});