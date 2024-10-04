import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
  query,
  where,
} from "firebase/firestore/lite";

// when i use .env i get an error on vercel so left configs like this until i fix it
const firebaseConfig = {
  apiKey: "AIzaSyA0Td7JxhDGaC4GDxjWZbMgtcu5TnWnO58",
  authDomain: "minimalist-ecomerce.firebaseapp.com",
  projectId: "minimalist-ecomerce",
  storageBucket: "minimalist-ecomerce.appspot.com",
  messagingSenderId: "20752940568",
  appId: "1:20752940568:web:eee3e5e17aa6f125010d6d",
  measurementId: "G-FXFBP37M08",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const prodsCollectionRef = collection(db, "products");

export async function getProds() {
  const querySnapshot = await getDocs(prodsCollectionRef);
  const dataArr = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return dataArr;
}

export async function getProd(id) {
  const docRef = doc(db, "products", id);
  const prodSnapshot = await getDoc(docRef);
  return {
    ...prodSnapshot.data(),
    id: prodSnapshot.id,
  };
}

export async function getProudProds() {
  const q = query(prodsCollectionRef, where("proudId", "==", "123"));
  const querySnapshot = await getDocs(q);
  const dataArr = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return dataArr;
}

export async function getNewProds() {
  const q = query(prodsCollectionRef, where("newId", "==", "321"));
  const querySnapshot = await getDocs(q);
  const dataArr = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return dataArr;
}
