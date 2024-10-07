// Load categories
const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((err) => console.log(err));
};

// Display categories
const displayCategories = (categories) => {
  categories.forEach((item) => {
    const categoryButtons = document.getElementById("category-buttons");
    const button = document.createElement("button");
    button.classList =
      "btn px-12 pt-6 pb-16 text-lg font-bold font-inter bg-white border-[#0E7A8126]";
    button.innerHTML = `<img src="${item.category_icon}" class="w-10 h-10" alt=""> ${item.category}`;
    categoryButtons.append(button);
  });
};

// Load all pets
const loadAllPets = () => {
  fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then((res) => res.json())
    .then((data) => displayAllPets(data.pets))
    .catch((err) => console.log(err));
};

// Display all pets
const displayAllPets = (pets) => {
  pets.forEach((pet) => {
    const cardContainer = document.getElementById("card-container");
    const card = document.createElement("div");
    card.classList = "card border p-3 rounded-lg";
    card.innerHTML = `
        <div>
            <img class="rounded-lg h-48 object-cover w-full"
            src=${pet.image}
            alt=${pet.pet_name}/>
        </div>
        <div class="mt-4 space-y-2">
            <h2 class="font-inter text-2xl font-bold text-color2">${pet.pet_name}</h2>
            <p class="font-lato text-color3 font-medium text-base flex items-center gap-2"><img src="images/frame1.png" alt="">Breed: ${pet.breed}</p>
            <p class="font-lato text-color3 font-medium text-base flex items-center gap-2"><img src="images/frame2.png" alt="">Birth: ${pet.date_of_birth}</p>
            <p class="font-lato text-color3 font-medium text-base flex items-center gap-2"><img src="images/frame3.png" alt="">Gender: ${pet.gender}</p>
            <p class="font-lato text-color3 font-medium text-base flex items-center gap-2"><img src="images/frame4.png" alt="">Price: ${pet.price}</p>
            <br/><hr/><br/>
            <div class="card-actions flex items-center justify-center gap-3">
                <button class="btn border-[#0E7A8126] bg-white text-lg font-semibold"><i class="fa-regular fa-thumbs-up"></i></button>
                <button class="btn border-[#0E7A8126] bg-white text-color1 text-lg font-semibold">Adopt</button>
                <button class="btn border-[#0E7A8126] bg-white text-color1 text-lg font-semibold">Details</button>
            </div>
        </div>
    `;
    cardContainer.append(card)
  });
};

loadCategories();
loadAllPets();
