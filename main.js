// // Defining text characters for the empty and full hearts for you to use later.
// my solution

// const EMPTY_HEART = '♡'
// const FULL_HEART = '♥'
// const modal = document.getElementById('modal')
// let likeGlyphs = document.getElementsByClassName('like-glyph');
// // likeGlyphs.forEach(likeGlyph => console.log(likeGlyph));


// // Your JavaScript code goes here!
// document.addEventListener("DOMContentLoaded", () => {

//   debugger

//   for(i=0; i < likeGlyphs.length; i++){
//     likeGlyphs[i].addEventListener('click', mimicServerCall)
  
    // function mimicServerCall(e){
    //   if(e.target.innerText === EMPTY_HEART){
    //     e.target.setAttribute('class','activated-heart')
    //     e.target.innerText = FULL_HEART;
    //   } else {
    //     e.target.setAttribute('class','')
    //     e.target.innerText = EMPTY_HEART;
    //   }
    // }
//     mimicServerCall().then(() => {

//       if (heart.innerText === EMPTY_HEART){
//             heart.innerText = FULL_HEART
//             heart.className = "activated-heart"
//       } else{
//             heart.innerText = EMPTY_HEART
//             heart.className = ""
//       }
//     }).catch(() => {
//             modal.className = ''
      
//             setTimeout(() => {
//               modal.className = 'hidden'
//             }, 5000)
//           })
//     }
// });



// ----------


// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const modal = document.getElementById('modal')
modal.className = 'hidden'
const heartBtns = document.getElementsByClassName('like-glyph')

document.addEventListener('DOMContentLoaded', () => {
  for(const button of heartBtns) {
    button.addEventListener('click',(e) => {
    let heart = e.target
    //mimicservercall function
    mimicServerCall()
    .then(() => {
      if (heart.innerText === EMPTY_HEART){
        heart.innerText = FULL_HEART
        heart.className = "activated-heart"
      } else{
        heart.innerText = EMPTY_HEART
        heart.className = ""
      }
    })
    .catch(() => {
      modal.className = ''

      setTimeout(() => {
        modal.className = 'hidden'
      }, 5000)
    })

  })

  }
})



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
