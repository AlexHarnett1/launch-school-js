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
      renderCommentsFor(photoData[0].id)
    } else {
      console.error(`Error: ${request.status}`);
    }
  });

  request.send();


  function renderPhotos() {
    let photos = { photos: photoData };
    document.getElementById('slides').insertAdjacentHTML('beforeend', templates.photos(photos));
  }

  function renderPhotoInformation(photoId) {
    let photo = photoData.filter(function (item) {
      return item.id === photoId;
    })[0];
    document.querySelector('section > header').insertAdjacentHTML('beforeend', templates.photo_information(photo));
  }
  
  function renderCommentsFor(id) {
    fetch(`comments?photo_id=${id}`)
      .then(response => response.json())
      .then(json => {
        let comments = { comments: json };
        document.querySelector("#comments ul").insertAdjacentHTML('beforeend', templates.photo_comments(comments));
      });
  }

});



function insertCommentHTML(commentData) {

}