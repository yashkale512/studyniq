let currentUser =
localStorage.getItem("studentUsername");

let userArea =
document.getElementById("userArea");

let loginNav =
document.getElementById("loginNav");

if(currentUser){

  if(userArea){

    userArea.innerHTML = `
    
    <span class="welcome-user">
      Hi, ${currentUser}
    </span>

    <button class="logout-btn" onclick="logoutUser()">
      Logout
    </button>

    `;

  }

  if(loginNav){

    loginNav.style.display = "none";

  }

}

function logoutUser(){

  localStorage.removeItem("studentUsername");

  localStorage.removeItem("studentPassword");

  location.reload();

}