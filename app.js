const galleryImage = document.getElementById("galleryImage");

galleryObj = [
  {
    locName: "Florence",
    url: "florence.jpg",
    id: 1,
  },
  {
    locName: "Japan",
    url: "japan.jpg",
    id: 2,
  },
  {
    locName: "Liverpool",
    url: "liverpool.jpg",
    id: 3,
  },
  {
    locName: "New York",
    url: "newyork.jpg",
    id: 4,
  },
  {
    locName: "Riga",
    url: "riga.jpg",
    id: 5,
  },
  { locName: "Singapore", url: "singapore.jpg", id: 6 },
];

function displayImage() {
  for (let i = 0; i < galleryObj.length; i++) {
    console.log(galleryObj[i].url);

    let img = document.createElement("img");
    galleryImage.src = `"/assets/gallery/${galleryObj[i].url}"`;
    img.appendChild(img);
  }
}
displayImage();

// TODO: loop through the images
// TODO: DOM them onto the page
// TODO: create thumbnail images
// TODO: create collapsable media
