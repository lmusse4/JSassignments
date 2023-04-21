//Put the buttons with javascript and add functions
document.getElementById('get-all-posts').addEventListener('click', getAllPosts);
document.getElementById('get-post-by-id').addEventListener('click', getPostById);
document.getElementById('create-post').addEventListener('click', createPost);
document.getElementById('replace-post').addEventListener('click', replacePost);
document.getElementById('update-post-title').addEventListener('click', updatePostTitle);
document.getElementById('delete-post').addEventListener('click', deletePost);


function hideResult() {
  document.getElementById('result').innerHTML = '';
}

function renderResult(data) {
  document.getElementById('result').innerHTML = JSON.stringify(data, null, 2);
}

//Get all the posts
function getAllPosts() {
  hideResult();
  fetch("http://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => renderResult(data))
    .catch(error => console.error(error));
}

//Get post with ID 10
function getPostById() {
  hideResult();
  fetch("http://jsonplaceholder.typicode.com/posts/10")
    .then(response => response.json())
    .then(data => renderResult(data))
    .catch(error => console.error(error));
}

//Create new post and log ID
function createPost() {
  hideResult();
  const newPost = {
    title: 'New Post Title',
    body: 'New Post Body',
    userId: 1
  };
  fetch("http://jsonplaceholder.typicode.com/posts", {
    method: 'POST',
    body: JSON.stringify(newPost),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => renderResult(data))
    .catch(error => console.error(error));
}

//replace the post with ID of 12 and render responseJSON
function replacePost() {
  hideResult();
  let updatedPost = {
    id: 12,
    title: 'New Post Title',
    body: 'New Post Body',
    userId: 1
  };
  fetch("http://jsonplaceholder.typicode.com/posts/12", {
    method: 'PUT',
    body: JSON.stringify(updatedPost),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => renderResult(data))
    .catch(error => console.error(error));
}


//Update title of post with ID of 12
function updatePostTitle() {
  hideResult();
  const updatedPostTitle = {
    title: 'Updated Post Title'
  };
  fetch("http://jsonplaceholder.typicode.com/posts/12", {
    method: 'PATCH',
    body: JSON.stringify(updatedPostTitle),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => renderResult(data))
    .catch(error => console.error(error));
}

//Delete the post ID of 12 and put out success message
function deletePost() {
    hideResult();
    fetch("http://jsonplaceholder.typicode.com/posts/12", {
      method: 'DELETE'
    })
    .then(response => {
      if (response.status === 200) {
        renderResult('Post with ID 12 was deleted successfully.');
      } else {
        renderResult(`There was an error deleting post with ID 12`);
      }
    })
    .catch(error => {
      console.error(error);
    });
  }
  