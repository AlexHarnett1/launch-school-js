document.addEventListener('DOMContentLoaded', () => {
  let photoData;
  let templates = {};

  // Get all the handlebars templates
  document.querySelectorAll("script[type='text/x-handlebars']").forEach(tmpl => {
    templates[tmpl["id"]] = Handlebars.compile(tmpl["innerHTML"]);
  });

  document.querySelectorAll('[data-type=partial]').forEach(tmpl => {
    Handlebars.registerPartial(tmpl["id"], tmpl["innerHTML"]);
  });

  // Make XML HTTP Request for /photos
  let request = new XMLHttpRequest();
  request.open('GET', '/photos');
  request.responseType = 'json';

  request.addEventListener('load', () => {
    if (request.status >= 200 && request.status < 300) {
      // Access the parsed JSON response
      console.log(request.response);
      photoData = request.response;
      renderPhotos();
      renderPhotoInformation(photoData[0].id);
      renderCommentsFor(photoData[0].id);
      slideshow.init();
    } else {
      console.error(`Error: ${request.status}`);
    }
  });

  request.send();

  const slideshow = {
    nextPhoto: function (e) {
      e.preventDefault();
      let nextSlide = this.currentSlide.nextElementSibling;
      if (!nextSlide) nextSlide = this.firstSlide;
      this.fadeOut(this.currentSlide);
      this.fadeIn(nextSlide);
      this.renderPhotoContent(nextSlide.getAttribute('data-id'));
      this.currentSlide = nextSlide;
    },
    prevPhoto: function (e) {
      e.preventDefault();
      let prevSlide = this.currentSlide.previousElementSibling;
      if (!prevSlide) prevSlide = this.lastSlide;
      this.fadeOut(this.currentSlide);
      this.fadeIn(prevSlide);
      this.renderPhotoContent(prevSlide.getAttribute('data-id'));
      this.currentSlide = prevSlide;
    },
    fadeOut: function (slide) {
      slide.setAttribute('class', 'hide');
    },
    fadeIn: function (slide) {
      slide.setAttribute('class', 'show');
    },
    renderPhotoContent: function (id) {
      renderPhotoInformation(Number(id));
      document.querySelector("form input[name='photo_id']").setAttribute('value', id);
      renderCommentsFor(id);
    },
    bind: function () {
      let ul = this.slideshow.querySelector('ul');

      ul.addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
          if (event.target.classList.contains('prev')) {
            console.log('Previous clicked');
            this.prevPhoto(event);
          } else if (event.target.classList.contains('next')) {
            console.log('Next clicked');
            this.nextPhoto(event);
          }
        }
      });
    },
    init: function () {
      this.slideshow = document.querySelector('#slideshow');
      let slides = this.slideshow.querySelectorAll('figure');
      this.firstSlide = slides[0];
      this.lastSlide = slides[slides.length - 1];
      this.currentSlide = this.firstSlide;
      this.bind();
    },
  }

  function renderPhotos() {
    let photos = { photos: photoData };
    document.getElementById('slides').insertAdjacentHTML('beforeend', templates.photos(photos));
  }

  function renderPhotoInformation(photoId) {
    let photo = photoData.filter(function (item) {
      return item.id === photoId;
    })[0];
    document.querySelector('section > header').innerHTML = "";
    document.querySelector('section > header').insertAdjacentHTML('beforeend', templates.photo_information(photo));
  }
  
  function renderCommentsFor(id) {
    // A different version of making an XML HTTP Request using Fetch
    fetch(`comments?photo_id=${id}`)
      .then(response => response.json())
      .then(json => {
        let comments = { comments: json };
        document.querySelector("#comments ul").innerHTML = "";
        document.querySelector("#comments ul").insertAdjacentHTML('beforeend', templates.photo_comments(comments));
      });
  }

  document.querySelector('section > header').addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.tagName === 'A') {
      let button = event.target;
      let href = button.getAttribute('href');
      let dataId = button.getAttribute('data-id');
      let text = button.textContent;

      fetch(href, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        body: 'photo_id=' + dataId
      })
        .then(response => response.json())
        .then(json => {
          console.log(json.total);
          let newText = text.replace(/\d+/, json.total);
          button.textContent = newText;
          fetch("/photos")
            .then(response => response.json())
            .then(json => photoData = json);
        });
    }

  });

  document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    let form = event.target;
    let href = form.getAttribute('action');
    let formData = new FormData(form);
    let urlSearch = new URLSearchParams(formData);
    console.log(urlSearch);
    //get the data from the form
    fetch(href, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      body: urlSearch
    })
      .then(response => response.json())
      .then(json => {
        console.log(json)
        renderCommentsFor(json.photo_id);
        form.reset();
      });

  })
    
});