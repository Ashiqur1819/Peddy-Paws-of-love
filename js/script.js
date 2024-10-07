// Load categories
const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/categories")
      .then((res) => res.json())
      .then((data) => displayCategories(data.categories))
      .catch((err) => console.log(err));
}

// Display categories
const displayCategories = (categories) => {
    categories.forEach(item => {
        const categoryButtons = document.getElementById("category-buttons");
        const button = document.createElement('button');
        button.classList =
          "btn px-12 pt-6 pb-16 text-lg font-bold font-inter bg-white border-[#0E7A8126]";
        button.innerHTML = `<img src="${item.category_icon}" class="w-10 h-10" alt=""> ${item.category}`;
        categoryButtons.append(button)
    });
}

loadCategories()