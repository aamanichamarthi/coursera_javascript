const images = document.querySelectorAll('img');
const imageContainer = document.getElementById('image');

function upDate(previewPic) {
  console.log('Event triggered');

  console.log('Alt: ', previewPic.alt);
  console.log('Source: ', previewPic.src);

  imageContainer.textContent = previewPic.alt;

  imageContainer.style.backgroundImage = `url('${previewPic.src}')`;
}

function undo() {
  imageContainer.style.backgroundImage = "url('')";
  imageContainer.textContent = "Hover over an image below to display here.";
}

images.forEach(image => {
  image.addEventListener('mouseover', function () {
    upDate(image);
  });

  image.addEventListener('mouseout', function () {
    undo();
  });
});
