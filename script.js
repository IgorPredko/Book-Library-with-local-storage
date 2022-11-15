const books = document.querySelectorAll(".book__header");

function click() {
  const click = new Audio();
  click.src = "clickSound/click.mp3";
  click.autoplay = true;
}

function openBook() {
  books.forEach((book) => {
    book.addEventListener("click", (event) => {
      event.target.parentNode.classList.toggle("active");
    });
  });
}

openBook();

/////////CIRCLE////////////
const circlePlus = document.querySelectorAll(".circle-plus");
const circlePlusTwo = document.querySelectorAll(".circle-plus-two");

circlePlus.forEach((plus) => {
  plus.addEventListener("click", () => {
    plus.classList.toggle("openedCross");
    click();
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
  btn.addEventListener("click", function () {
    click();
    stars.forEach((star) => {
      star.innerHTML = "&#9734";
      starInfo.innerHTML = `0 of 5`;
    });
  });
});

// cleanBtn.addEventListener("click", function () {
//   click();
//   stars.forEach((star) => {
//     star.innerHTML = "&#9734";
//     starInfo.innerHTML = `0 of 5`;
//   });
// });

stars.forEach((star, i) => {
  star.onclick = function () {
    let currentStarLevel = i + 1;
    starInfo.innerHTML = `${currentStarLevel} of 5`;
    click();

    stars.forEach((star, j) => {
      if (currentStarLevel >= j + 1) {
        star.innerHTML = "&#9733";
      } else {
        star.innerHTML = "&#9734";
      }
    });
  };
});

/////////////INPUT CLICK SOUND/////////////////////
const inputs = document.querySelectorAll("input");
inputs.forEach((inp) => {
  inp.addEventListener("click", () => {
    click();
  });
});
//////////////////LOCAL STORAGE///////////////////////////

document.querySelectorAll("input").forEach((el) => {
  el.onchange = () => localStorage.setItem(el.id, el.checked);
  el.checked = localStorage.getItem(el.id) === "true";
});

stars.forEach((star) => {
  localStorage.setItem(star.innerHTML, starInfo.innerHTML);
  starInfo.innerHTML = localStorage.getItem(starInfo.innerHTML);
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
