import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  addDoc,
  collection,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyD76N2mmrBfdmjWnhaYrdLC50hp_Cga45E",

  authDomain: "attendenceapp-database.firebaseapp.com",

  databaseURL: "https://attendenceapp-database-default-rtdb.firebaseio.com",

  projectId: "attendenceapp-database",

  storageBucket: "attendenceapp-database.appspot.com",

  messagingSenderId: "332647299546",

  appId: "1:332647299546:web:35ce1e7607c613f1b8e8e3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const authentication = getAuth();
const db = getFirestore();

let login = document.getElementById("login");
login.addEventListener("click", function () {
  let userName = document.getElementById("user-value");
  let password = document.getElementById("pass-value");

  signInWithEmailAndPassword(authentication, userName.value, password.value)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      let error_para = document.getElementById("error");
      error_para.style.display = "none";
      userName.style.borderColor = "green";
      password.style.borderColor = "green";
      window.location.href = "./Dashboard/index.html";
    })
    .catch((error) => {
      let error_para = document.getElementById("error");
      error_para.style.display = "block";
      userName.style.borderColor = "red";
      password.style.borderColor = "red";
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
});
let Sname = document.getElementById("user-name");
let Fname = document.getElementById("father-name");
let roll_num = document.getElementById("roll-num");
let teacher = document.getElementById("teacher");
let timing = document.getElementById("timing");
let number = document.getElementById("number");
async function addingDoc(e) {
  e.preventDefault();
  try {
    const docRef = await addDoc(collection(db, "users"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

let button = document.getElementById("button");
button.addEventListener("click", addingDoc);
