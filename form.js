    var firebaseConfig = {
        apiKey: "-----------------",
        authDomain: "treehacks-8d024.firebaseapp.com",
        projectId: "treehacks-8d024",
        storageBucket: "treehacks-8d024.appspot.com",
        messagingSenderId: "877151781838",
        appId: "1:877151781838:web:6a3c4b5b538eda95cd219f",
        measurementId: "G-F82JHRHSML"
    };

    firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();
    function signUp() {
        var email = document.getElementById("username-field");
        var password  = document.getElementById("password-field");
        const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
        promise.catch(e=>alert(e.message));

        alert("Signed Up");
    }

