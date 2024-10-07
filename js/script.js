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
    button.addEventListener('click', () => {

      const spinner = document.getElementById("spinner");
      spinner.classList.remove('hidden');
      const cardContainer = document.getElementById("card-container");
      cardContainer.classList.add("hidden");
      const cardContainer2 = document.getElementById("card-container-2");
      cardContainer2.classList.add("hidden");

      setTimeout(() => {
        loadCategoryPets(item.category);
      }, 2000);
    })
  });
};

// Load Category pets
const loadCategoryPets = (id) =>  {
  fetch(`https://openapi.programming-hero.com/api/peddy/category/${id}`)
    .then((res) => res.json())
    .then((data) => displayAllPets(data.data));

          const spinner = document.getElementById("spinner");
          spinner.classList.add("hidden");

          const cardContainer = document.getElementById("card-container");
          cardContainer.classList.remove("hidden");

          const cardContainer2 = document.getElementById("card-container-2");
          cardContainer2.classList.remove("hidden");
}

// Load all pets
const loadAllPets = () => {
  fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then((res) => res.json())
    .then((data) => displayAllPets(data.pets))
    .catch((err) => console.log(err));
};

// Display all pets
const displayAllPets = (pets) => {
      const cardContainer = document.getElementById("card-container");
      cardContainer.innerHTML = "";
  pets.forEach((pet) => {
    const card = document.createElement("div");
    card.classList = "card border p-3 rounded-lg";
    card.innerHTML = `
        <div>
            <img class="rounded-lg h-48 object-cover w-full"
            src=${pet.image}
            alt=${pet.pet_name}/>
        </div>
        <div class="mt-4 space-y-2">
            <h2 class="font-inter text-2xl font-bold text-color2">${
              pet.pet_name
            }</h2>



            <p class="font-lato text-color3 font-medium text-base flex items-center gap-2"><img src="images/frame1.png" alt="">Breed: ${
              pet.breed ? pet.breed : `Not available`
            }</p>
            
            <p class="font-lato text-color3 font-medium text-base flex items-center gap-2"><img src="images/frame2.png" alt="">Birth: ${
              pet.date_of_birth ? pet.date_of_birth : `Not available`
            }</p>

            <p class="font-lato text-color3 font-medium text-base flex items-center gap-2"><img src="images/frame3.png" alt="">Gender: ${
              pet.gender ? pet.gender : `Not available`
            }</p>

            <p class="font-lato text-color3 font-medium text-base flex items-center gap-2"><img src="images/frame4.png" alt="">Price: ${
              pet.price ? pet.price : `Not available`
            }</p>
            <br/><hr/><br/>
            <div class="card-actions flex items-center justify-center gap-3">
                <button onclick="pickImage('${pet.petId}')" class="btn border-[#0E7A8126] bg-white text-lg font-semibold"><i class="fa-regular fa-thumbs-up"></i></button>
                <button class="btn border-[#0E7A8126] bg-white text-color1 text-lg font-semibold">Adopt</button>
                <button onclick="showDetails('${pet.petId}')" class="btn border-[#0E7A8126] bg-white text-color1 text-lg font-semibold">Details</button>
            </div>
        </div>
    `;
    cardContainer.append(card)
  });
};

// Pick image
const pickImage = async(id) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/peddy/pet/${id}`);
  const data = await res.json();
  console.log(data.petData);

  const {image} = data.petData;

  const cardContainer2 = document.getElementById("card-container-2");
  const content = document.getElementById("content");
  const div = document.createElement('div');
  div.innerHTML = `
     <img class="rounded-lg h-36 object-cover" src=${image} alt="">
  `;
  content.appendChild(div);

};

// Show details
const showDetails = async(id) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/peddy/pet/${id}`);
  const data = await res.json();
  console.log(data.petData);

  const {image, pet_name, breed, date_of_birth, gender, price, pet_details, vaccinated_status} = data.petData;

  const modalContainer = document.getElementById('modal-container');
  modalContainer.innerHTML = `
    <dialog id="my_modal_1" class="modal">
      <div class="modal-box">
        <img class="rounded-lg h-60 object-cover w-full" src=${image} alt=""/>
        <h3 class="text-2xl font-bold mt-4">${pet_name}</h3>
        <div class="mt-4 md:flex justify-between space-y-2">
        <div class="space-y-2">
          <p class="font-lato text-color3 font-medium text-base flex items-center gap-2"><img src="images/frame1.png" alt="">Breed: ${
            breed ? breed : `Not available`
          }</p>
          <p class="font-lato text-color3 font-medium text-base flex items-center gap-2"><img src="images/frame3.png" alt="">Gender: ${
            gender ? gender : `Not available`
          }</p>
          <p class="font-lato text-color3 font-medium text-base flex items-center gap-2"><img src="images/frame3.png" alt="">Vaccinated status: ${
            vaccinated_status ? vaccinated_status : `Not available`
          }</p>
        </div>
        <div class="space-y-2">
          <p class="font-lato text-color3 font-medium text-base flex items-center gap-2"><img src="images/frame2.png" alt="">Birth: ${
            date_of_birth ? date_of_birth : `Not available`
          }</p>
          <p class="font-lato text-color3 font-medium text-base flex items-center gap-2"><img src="images/frame4.png" alt="">Price: ${
            price ? price : `Not available`
          }</p>
        </div>
        </div>
        <br/><hr/><br/>
        <div>
          <h3 class="font-2xl font-bold">Details Information</h3>
          <p class="font-lato text-color3 font-medium text-base flex items-center gap-2">${
            pet_details ? pet_details : `Not available`
          }</p>
        </div>
        <div class="modal-action">
          <form method="dialog" class="w-full">
            <button class="btn w-full bg-[#0E7A811A] border-[#0E7A8133] font-semibold text-lg text-color1">Cancel</button>
          </form>
        </div>
      </div>
    </dialog>
  `;
  my_modal_1.showModal();
  
}

loadCategories();
loadAllPets();
