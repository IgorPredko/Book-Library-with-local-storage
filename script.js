const books = document.querySelectorAll(".book__header");

function playSound() {
  const click = new Audio();
  click.src = "clickSound/click.mp3";
  click.autoplay = true;
}

/////////CIRCLE////////////
const circlePlus = document.querySelectorAll(".circle-plus");
const circlePlusTwo = document.querySelectorAll(".circle-plus-two");

circlePlus.forEach((plus) => {
  plus.addEventListener("click", (event) => {
    plus.classList.toggle("openedCross");
    event.target.closest(".book").classList.toggle("active");
    playSound();
  });
});

circlePlusTwo.forEach((plus) => {
  plus.addEventListener("click", () => {
    plus.classList.toggle("openedCross");
  });
});

///////////STARS////////////
const stars = document.querySelectorAll(".star");
const starInfo = document.querySelector(".star-info");
const cleanBtn = document.querySelectorAll(".clean-btn");

cleanBtn.forEach((btn) => {
  btn.addEventListener("click", function (event) {
    playSound();
    const bookElement = event.target.closest(".book");
    const localStars = bookElement.querySelectorAll(".star");
    const starInfo = bookElement.querySelector(".star-info");

    localStars.forEach((star) => {
      star.innerHTML = "&#9734";
    });

    starInfo.innerHTML = "0 of 5";

    localStorage.removeItem(bookElement.id);
  });
});

stars.forEach((star, i) => {
  const bookId = Math.floor(i / 5);
  const rating = i - 5 * bookId + 1;

  star.onclick = function (event) {
    const bookElement = event.target.closest(".book");
    const localStars = bookElement.querySelectorAll(".star");
    const starInfo = bookElement.querySelector(".star-info");
    localStars.forEach((star, key) => {
      if (key < rating) {
        star.innerHTML = "&#9733";
      } else {
        star.innerHTML = "&#9734";
      }
    });

    starInfo.innerHTML = `${rating} of 5`;

    localStorage.setItem(bookElement.id, rating);
  };
});

/////////////INPUT CLICK SOUND/////////////////////
const inputs = document.querySelectorAll("input");
inputs.forEach((inp) => {
  inp.addEventListener("click", () => {
    playSound();
  });
});
//////////////////LOCAL STORAGE///////////////////////////

document.querySelectorAll("input").forEach((el) => {
  el.onchange = () => localStorage.setItem(el.id, el.checked);
  el.checked = localStorage.getItem(el.id) === "true";
});

document.querySelectorAll(".book").forEach((book) => {
  const savedRecord = localStorage.getItem(book.id);

  if (savedRecord !== null && savedRecord !== undefined) {
    const localStars = book.querySelectorAll(".star");
    const starInfo = book.querySelector(".star-info");

    localStars.forEach((star, key) => {
      if (key < savedRecord) {
        star.innerHTML = "&#9733";
      } else {
        star.innerHTML = "&#9734";
      }
    });

    starInfo.innerHTML = `${savedRecord} of 5`;
  }
});

///////////OPEN-CLOSE BOOK CONTENT////////////
// const openMore = document.querySelectorAll(".openMore");
// const showContent = document.querySelectorAll(".book-content");
// const opened = document.querySelectorAll(".book-header");

// for (let i = 0; i < openMore.length; i++) {
//   openMore[i].addEventListener("click", function () {
//     this.classList.toggle("active");
//   });
// }

// openMore.forEach((event) => {
//   event.addEventListener("click", () => {
//     showContent.forEach((cont) => {
//       cont.classList.toggle("active");
//     });
//   });
// });

// openMore.forEach((book) => {
//   book.addEventListener("click", () => {
//     showContent.style.display = "block";
//   });
// });

//  SIZES/ RATING AND INPUT LOCAL STORAGE/ ACCORDION
