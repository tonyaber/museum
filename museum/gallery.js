const pictureInnerContainer = document.querySelector('.gallery_list_inner');

const gallerySrc = new Array(12).fill('')
  .map((item, index) => item = `assets/img/gallery/galery${index + 1}.jpg`)
  .sort(() => Math.random() - 0.5)
  .forEach(item => {
    const img = document.createElement('img');
    img.classList.add('gallery-img')
    img.src = item;
    img.alt = `galery`;
    pictureInnerContainer.append(img);
  })

