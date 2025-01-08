// const messageElement = document.getElementById('welcome-message');
// const message = "Thank for choosing us";
// let index = 0;

// function typeEffect() {
//     if (index < message.length) {
//         messageElement.innerText += message[index];
//         index++;
//         setTimeout(typeEffect, 100);
//     } else {
//         setTimeout(() => {
//             fetch('/get-homepage-url')
//                 .then((response) => response.json())
//                 .then((data) => {
//                     window.location.href = data.url;
//                 })
//                 .catch((err) => console.error("Error fetching homepage URL:", err));
//         }, 2000);
//     }
// }

// typeEffect();
