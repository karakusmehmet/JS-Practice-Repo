const searchInput = document.getElementById("search-input");
const imagesDiv = document.querySelector(".images");
const resetButton = document.getElementById("reset-button");

function runEventListener() {
  document.forms.form.addEventListener("submit", search);
  resetButton.addEventListener("click", clean);
}

const clean = () => {
  imagesDiv.innerHTML = "";
};

async function search(e) {
  e.preventDefault();
  try {
    const value = searchInput.value.trim();
    const address = `https://api.unsplash.com/search/photos?query=${value}`;
    const response = await fetch(address, {
      method: "GET",
      headers: {
        Authorization: "Client-ID c3GdZnBoLuRvO-eL6OP_IhzQrCWE0ukuK9aekW4N-Ko ",
      },
    });
    const jsonResponse = await response.json();
    catchResponse(jsonResponse);
  } catch (error) {
    console.log(error);
  }
}

const catchResponse = (response) => {
  const images = response.results.map((item) => item.urls.small);

  showImages(images);
};

const showImages = (images) => {
  imagesDiv.innerHTML = "";
  images.forEach((img) => {
    const image = document.createElement("img");
    image.setAttribute("src", img);
    imagesDiv.appendChild(image);
  });
};

runEventListener();
