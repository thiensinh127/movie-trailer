// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  //   signInWithEmailAndPassword,
  //createUserWithEmailAndPassword,
  //   sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import { FIREBASE_CONFIG } from "../utils/firebase";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

// Initialize Firebase
const app = initializeApp(FIREBASE_CONFIG);

const googleProvider = new GoogleAuthProvider();

const db = getFirestore(app);

export const signInWithGoogle = async () => {
  let res = {};
  try {
    res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
  }
  return res;
};

// const logInWithEmailAndPassword = async (email, password) => {
//   try {
//     await signInWithEmailAndPassword(auth, email, password);
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };

// const registerWithEmailAndPassword = async (name, email, password) => {
//     try {
//       const res = await createUserWithEmailAndPassword(auth, email, password);
//       const user = res.user;
//       await addDoc(collection(db, "users"), {
//         uid: user.uid,
//         name,
//         authProvider: "local",
//         email,
//       });
//     } catch (err) {
//       console.error(err);
//       alert(err.message);
//     }
//   };

// const sendPasswordReset = async (email) => {
//     try {
//       await sendPasswordResetEmail(auth, email);
//       alert("Password reset link sent!");
//     } catch (err) {
//       console.error(err);
//       alert(err.message);
//     }
//   };

export const logout = () => {
  signOut(auth);
};

export const auth = getAuth(app);

// Initialize Firebase Authentication and get a reference to the service
export default app;
