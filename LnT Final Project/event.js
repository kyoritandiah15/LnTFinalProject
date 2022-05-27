jQuery("#form").validate({
  rules: {
    nama: {
      required: true,
      minlength: 3,
    },
    email: {
      required: true,
      email: true,
    },
    nomorTelepon: {
      required: true,
      maxlength: 14,
      number: true,
    },
    event: {
      required: true,
    },
  },
  messages: {
    nama: {
      required: "Mohon isi nama Anda",
      minlength: "Nama minimal 3 karakter",
    },
    email: {
      required: "Mohon isi email Anda",
      email: "Mohon isi dengan email yang valid, harus ada karakter '@'",
    },
    nomorTelepon: {
      required: "Mohon isi nomor telepon Anda",
      maxlength: "Nomor telepon maksimal 14 digit",
      number: "Nomor telepon hanya boleh diisi dengan angka",
    },
    event: {
      required: "Mohon pilih event yang ingin diikuti",
    },
  },
});

const firebaseConfig = {
  apiKey: "AIzaSyAJOJrVIyj39InbPS2NxmzUoIJ8kGL1qNM",
  authDomain: "lnt-final-project-5b39a.firebaseapp.com",
  projectId: "lnt-final-project-5b39a",
  storageBucket: "lnt-final-project-5b39a.appspot.com",
  messagingSenderId: "838005693438",
  appId: "1:838005693438:web:221bab4c4a46137208feaf",
  measurementId: "G-LSEPJ0SM6D",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

const addData = () => {
  const namaValue = document.getElementById("nama").value;
  const emailValue = document.getElementById("email").value;
  const nomorValue = document.getElementById("nomorTelepon").value;
  const eventValue = document.getElementsByName("event").value;

  db.collection("data")
    .add({
      nama: namaValue,
      email: emailValue,
      nomorTelepon: nomorValue,
      event: eventValue,
    })
    .then(() => console.log("Insert Successful"));
};

const Btn = document.getElementById("Btn");
Btn.addEventListener("click", addData);
