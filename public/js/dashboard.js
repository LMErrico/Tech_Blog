const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#blog-title').value.trim();
  const contents = document.querySelector('#blog-contents').value.trim();

  if (title && contents) {
    const response = await fetch(`/api/blogs`, {
      method: 'POST',
      body: JSON.stringify({ title, contents }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create blog');
    }
  }
};

const delButtonHandler = async (event) => {
 // if (event.target.hasAttribute('data-id')) {
  if (event.target.classList.contains('btn-danger')) {
    const id = event.target.getAttribute('data-id');
    console.log(`deleting blog with ID: ${id}`);
    const response = await fetch(`/api/blogs/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      console.log("deleted")
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete blog');
    }
  }
};

const updateButtonHandler = async (event) => {
  console.log('Button clicked:', event.target);
  if (event.target.classList.contains('btn-update')) {
    const id = event.target.getAttribute('data-id');
    console.log("***id for updt   " + id);
    const title = prompt('Enter updated title:');
    const contents = prompt('Enter updated contents:');

    if (title && contents) {
      console.log(`Updating blog with ID: ${id}, title: ${title}, contents: ${contents}`);
      try {
        console.log('Sending PUT request');
        //const response = await fetch(`/api/blogs/update/${id}`, {
       const response = await fetch(`/api/blogs/${id}`, {

          method: 'PUT',
          body: JSON.stringify({ title, contents }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        console.log('Response received:', response);

        if (response.ok) {
          alert('Update ok');
          document.location.replace('/dashboard');
          return;
        } else {
          console.log('Failed to update blog, status:', response.status);
          alert('Failed to update blog');
        }
      } catch (err) {
        console.error('Error during fetch:', err);
        alert('An error occurred while updating the blog');
      }
    }
  }
};

document
  .querySelector('.new-blog-form')
  .addEventListener('submit', newFormHandler);

document
 .querySelector('.blog-list')
 .addEventListener('click', updateButtonHandler); 

document
  .querySelector('.blog-list')
  .addEventListener('click', delButtonHandler);
