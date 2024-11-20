// Import the functions you need from Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEPDqWxJkOSvKLzTc5ndoCb1AYOmB5z6g",
  authDomain: "metal-connect-604dc.firebaseapp.com",
  projectId: "metal-connect-604dc",
  storageBucket: "metal-connect-604dc.firebasestorage.app",
  messagingSenderId: "846562064335",
  appId: "1:846562064335:web:fee52a44e97a39f08684ba",
  measurementId: "G-572LPD8T1B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Register User
function registerUser(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm_password").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Registration successful!");
      window.location.href = "login.html"; // Redirect to login page
    })
    .catch((error) => {
      alert(error.message); // Show error message
    });
}

// Login User
function loginUser(event) {
  event.preventDefault();

  const email = document.getElementById("login_username").value;
  const password = document.getElementById("login_password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Login successful!");
      window.location.href = "dashboard.html"; // Redirect to the dashboard after login
    })
    .catch((error) => {
      alert(error.message); // Show error message
    });
}
