"use strict"

for (let i = 1; i <= 12; i++) {
    const name = document.getElementById(`name-${i}`);
    const user = document.getElementById(`user-${i}`);
  
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => {
        user.src = data.results[0].picture.medium;
        name.innerText = data.results[0].name.first;
      });
  }