// Select elements
const commentText = document.getElementById(‘comment-text‘);
const submitBtn = document.getElementById(‘submit‘);
const commentList = document.getElementById(‘comment-list‘);

// Submit event handler
submitBtn.addEventListener(‘click‘, function(){

  // Get input value
  const comment = commentText.value;

  // Create comment DOM element
  const newComment = document.createElement(‘li‘);
  newComment.innerText = comment;

  // Append to list
  commentList.appendChild(newComment);

  // Clear input
  commentText.value = ‘‘;

});
