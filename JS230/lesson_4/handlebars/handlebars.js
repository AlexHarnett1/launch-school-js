let post = {
  title: 'Lorem ipsum dolor sit amet',
  published: 'April 1, 2015',
  body: 'Sed ut perspiciatis <strong>unde</strong> omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
  tags: ['yolo', 'deeg', 'dawg'],
};

$(function () {
  Handlebars.registerPartial('tag', $('#tag').html());
  let postTemplate = Handlebars.compile($("#post").html());
  let postHTML = postTemplate(post);
  $("body").append(postHTML);
});