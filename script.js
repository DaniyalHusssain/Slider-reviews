let currentIndex = 0;
const array = [
  {
    img: "/Assests/person-1.jpeg",
    name: "Susan Smith",
    profession: "Web developer",
    info: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    img: "/Assests/person-2.jpeg",
    name: "Anna Johnson",
    profession: "Web designer",
    info: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    img: "/Assests/person-4.jpeg",
    name: "Peter Jones",
    profession: "Intern",
    info: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    img: "/Assests/person-3.jpeg",
    name: "Bill Anderson",
    profession: "The boss",
    info: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
  },
];

function nextSlide() {
  currentIndex++;
  if (currentIndex >= array.length) {
    currentIndex = 0;
  }
  showSlide();
}

function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = array.length - 1;
  }
  showSlide();
}
function random() {
  let randomIndex = Math.floor(Math.random() * array.length);
  currentIndex = randomIndex;
  showSlide();
}

function showSlide() {
  const slide = array[currentIndex];
  const slideContainer = document.querySelector(".slides");
  slideContainer.innerHTML = `
    <div class="slide">
     <div class="quote">
          <button class="icon"><i class="fa-solid fa-quote-right"></i></button>
        </div>
    <div class="slide-image">
      <img class="Image" src="${slide.img}" alt="${slide.name}">
      </div>
      <div class="slide-content">
        <p class="name">${slide.name}</p>
        <p class = "Profession"> ${slide.profession}</p>
        <p  class ="info">${slide.info}</p>
      </div>
    </div>
  `;
}
showSlide();
Math.floor(math.showSlide());
