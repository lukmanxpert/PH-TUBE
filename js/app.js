// load categories
const loadCatagorys = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((err) => console.log(err));
};
const displayCategories = (data) => {
    const categoriesDiv = document.getElementById('categories-div')
    console.log(categoriesDiv);
    data.forEach(categories => {
        const btn = document.createElement('button');
        btn.classList = "btn"
        btn.innerText = categories.category
        categoriesDiv.append(btn)
    });
};
loadCatagorys();
