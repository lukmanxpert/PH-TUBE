const getHr = (sec) => {
  const getHr = parseInt(sec / 3600);
  const leftSec = sec % 3600;
  const getMnt = parseInt(leftSec / 60);
  const availableSec = getMnt % 60;
  return `${getHr}hr : ${getMnt}mnt : ${availableSec}sec ago`;
  // return `${getHr}:${getSec} ago`
};
// functions for filter
const showCategoriesVideos = (id) => {
  fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.category);
      displayVideos(data.category);
    })
    .catch((err) => console.log(err));
};
// load categories create btn
const loadCatagorys = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((err) => console.log(err));
};
const displayCategories = (data) => {
  const categoriesDiv = document.getElementById("categories-div");
  data.forEach((categories) => {
    const btnContainer = document.createElement("div");
    btnContainer.innerHTML = `
    <button class="btn" onclick=(showCategoriesVideos(${categories.category_id}))>${categories.category}</button>
    `;
    categoriesDiv.append(btnContainer);
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
  videosSection.innerHTML = "";
  if (videos.length == 0) {
    videosSection.classList.remove("grid");
    videosSection.innerHTML = `
    <div class="flex flex-col min-h-[300px] justify-center items-center">
    <img src="assets/Icon.png">
    <h1 class="font-bold text-xl p-5">No Content Here in This Category</h1>
    </div>
    `;
    return;
  } else {
    videosSection.classList.add("grid");
  }
  videos.forEach((video) => {
    const videoDiv = document.createElement("div");
    videoDiv.classList = "card-compact";
    videoDiv.innerHTML = `
    <figure class="h-[200px] relative">
    <img class="h-full w-full object-cover"
      src=${video.thumbnail}
      alt="Shoes" />
      <p class="absolute bottom-2 right-2 bg-black text-white text-xs">${
        video.others?.posted_date.length == 0
          ? ""
          : getHr(video.others?.posted_date)
      }</p>
  </figure>
  <div class="pt-2 mb-4 flex gap-2">
    <div>
        <img class="h-8 w-8 object-cover rounded-full" src=${
          video.authors[0].profile_picture
        }>
    </div>
    <div>
    <h3 class="font-bold text-lg">${video.title}</h3>
    <p>${video.authors[0].profile_name} ${
      video.authors[0].verified === true
        ? '<img class="h-6 w-6 inline-block" src="https://img.icons8.com/?size=100&id=D9RtvkuOe31p&format=png&color=000000">'
        : ""
    } </p>
    <p>${video.others.views} views</p>
    </div>
  </div>
    `;
    videosSection.append(videoDiv);
  });
};
loadVideos();
loadCatagorys();

// {
//     "category_id": "1001",
//     "video_id": "aaaa",
//     "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
//     "title": "Shape of You",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
//             "profile_name": "Olivia Mitchell",
//             "verified": ""
//         }
//     ],
//     "others": {
//         "views": "100K",
//         "posted_date": "16278"
//     },
//     "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
// }
