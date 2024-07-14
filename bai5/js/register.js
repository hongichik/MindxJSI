import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const auth = getAuth();

const signupForm = document.getElementById('registerForm');

signupForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    alert(`Đăng ký thành công! User ID: ${ user.uid }`);
    window.location.href = '/login.html'
  } catch (error) {
    alert(`Đăng ký thất bại. Lỗi: ${ error.message }`);
  }
});