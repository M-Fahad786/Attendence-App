import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
// import { getDatabase } from "firebase/database";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyD76N2mmrBfdmjWnhaYrdLC50hp_Cga45E",

  authDomain: "attendenceapp-database.firebaseapp.com",

  projectId: "attendenceapp-database",

  storageBucket: "attendenceapp-database.appspot.com",

  messagingSenderId: "332647299546",

  appId: "1:332647299546:web:35ce1e7607c613f1b8e8e3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const authentication = getAuth();

let login = document.getElementById("login");
login.addEventListener("click", function () {
  let userName = document.getElementById("user-value");
  let password = document.getElementById("pass-error");
//   if (userName.value === "" && password.value === "") {
//     let para1 = document.getElementById("user-error");
//     let para2 = document.getElementById("pass-error");
//     para1.style.display = "block";
//     para2.style.display = "block";
//   } else {
//     let para1 = document.getElementById("user-error");
//     let para2 = document.getElementById("pass-error");
//     para1.style.display = "none";
//     para2.style.display = "none";
//   }

  signInWithEmailAndPassword(authentication, userName.value, password.value)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      let error_para = document.getElementById("error");
      error_para.style.display = "none";
      userName.style.borderColor = "green";
      password.style.borderColor = "green";
      // ...
    })
    .catch((error) => {
      let error_para = document.getElementById("error");
      error_para.style.display = "block";
      userName.style.borderColor = "red";
      password.style.borderColor = "red";
      const errorCode = error.code;
      const errorMessage = error.message;
    });
});
