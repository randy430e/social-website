import { initializeApp } from 'firebase/app'

import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBdjxvwkbyQMpvjYMABkhIx-DV6e5Ey96I",
    authDomain: "school-social-site.firebaseapp.com",
    projectId: "school-social-site",
    storageBucket: "school-social-site.appspot.com",
    messagingSenderId: "514447785596",
    appId: "1:514447785596:web:d9ca474a29b090b6dad3f9",
    measurementId: "G-0HR0X2QP0F"
  };

  // init firebase app
  initializeApp(firebaseConfig)

  // init services
  const db = getFirestore()
  const auth = getAuth()




  /* signing users up / idk how HTML classes work, set the querySelecter (L28)
  to the HTML class name for login */
  const signupForm = document.querySelector(".signup")
  signupForm.addEventListener('submit', (e) => {
      e.preventDefault()

      const email = signup_container.email.value
      const displayName = signup_container.username.value
      const password = signup_container.password.value

      createUserWithEmailAndPassword(auth, email, displayName, password)
        .then((cred) => {
            console.log('user created: ', cred.user)
            signupForm.reset()
        })
        .catch((err) => {
            console.log(err.message)
        })
  })


  // log out function
  const logoutButton = document.querySelector('.logout')
  logoutButton.addEventListener('click', () => {
    signOut(auth)
        .then(() => {
            console.log('the user signed out')
        })
        .catch((err) => {
            console.log(err.message)
        }) 
  })
  /* log in function / idk how HTML classes work, set the querySelecter (L60)
  to the HTML class name for login */
  const loginForm = document.querySelector('.login')
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const email = loginForm.email.value
    const password = loginForm.password.value
    signInWithEmailAndPassword(auth, email, password)
        .then((cred) => {
            console.log('user logged in', cred.user)
        })
        .catch((err) => {
            console.log(err.message)
        })
  })

