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
    videoDiv.classList = "card-compact";
    videoDiv.innerHTML = `
    <figure class="h-[200px]">
    <img class="h-full w-full object-cover"
      src=${video.thumbnail}
      alt="Shoes" />
  </figure>
  <div class="pt-2 mb-4 flex gap-2">
    <div>
        <img class="h-8 w-8 object-cover rounded-full" src=${video.authors[0].profile_picture}>
    </div>
    <div>
    <h3 class="font-bold text-lg">${video.title}</h3>
    <p>${video.authors[0].profile_name}</p>
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
