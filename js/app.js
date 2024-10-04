// load categories
const loadCatagorys = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((err) => console.log(err));
};
const displayCategories = (data) => {
  const categoriesDiv = document.getElementById("categories-div");
  data.forEach((categories) => {
    const btn = document.createElement("button");
    btn.classList = "btn";
    btn.innerText = categories.category;
    categoriesDiv.append(btn);
  });
};
// load videos
const loadVideos = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos))
    .catch((err) => console.log(err));
};
const displayVideos = (videos) => {
  const videosSection = document.getElementById("videos-section");
  videos.forEach((video) => {
    const videoDiv = document.createElement("div");
    videoDiv.classList = "card card-compact";
    videoDiv.innerHTML = `
    <figure>
    <img
      src=${video.thumbnail}
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
    `;
    videosSection.append(videoDiv);
  });
};
loadVideos();
loadCatagorys();
