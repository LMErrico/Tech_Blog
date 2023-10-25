const newBlogComment = async (event) => {
  event.preventDefault();
  const comment = document.getElementById('blog-comment').value;

  // Extract the ID from the URL
  const url = window.location.href;
  const idMatch = url.match(/\/blogs\/(\d+)$/); // Assuming the ID is a number
  const id = idMatch ? idMatch[1] : null;

  if (id) {
    console.log('ID from URL:', id);
    
    try {
      console.log('Sending PUT request');
      const response = await fetch(`/api/blogs/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ comment: comment }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Response received:', response);

      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        console.log('Failed to update blog, status:', response.status);
        alert('Failed to update blog');
      }
    } catch (err) {
      console.error('Error during fetch:', err);
      alert('An error occurred while updating the blog');
    }
  } else {
    console.log('ID not found in the URL');
    // Handle the case where the ID is not found in the URL.
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const commentForm = document.querySelector('#comment-form');

  if (commentForm) {
    commentForm.addEventListener('submit', newBlogComment);
  }

  console.log('query selector');
});


/* console.log('start');

const newBlogComment = async (event) => {
  event.preventDefault();
 //  const comment = document.getElementById('blog-comment').value;
  //const id = event.target.getAttribute('data-id'); 
  const form = event.currentTarget;
  const comment = form.querySelector('#blog-comment').value;
  const id = form.getAttribute('data-id'); // Access data-id from the form.
  console.log('**ID**  ' + id);
  try {
    console.log('Sending PUT request');
    const response = await fetch(`/api/blogs/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ comment: comment }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log('Response received:', response);

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      console.log('Failed to update blog, status:', response.status);
      alert('Failed to update blog');
    }
  } catch (err) {
    console.error('Error during fetch:', err);
    alert('An error occurred while updating the blog');
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const commentForm = document.querySelector('#comment-form');

  if (commentForm) {
    commentForm.addEventListener('submit', newBlogComment);
  }

  console.log('query selector');
}); 
 */
//************************************************************************************** */
/*   console.log('start');
  const newBlogComment = async (event) => {
    console.log('Form Element:', event.target);
    event.preventDefault();
    console.log('SUBMIT Button clicked:', event.target);
    const comment = document.getElementById('blog-comment').value;
  
    const id = event.target.getAttribute('data-id');
     
      
        //console.log(`Updating blog with ID: ${id}, title: ${title}, contents: ${contents}`);
        try {
          console.log('Sending PUT request');
          //const response = await fetch(`/api/blogs/update/${id}`, {
         const response = await fetch(`/api/blogs/${id}`, {

            method: 'PUT',
            body: JSON.stringify({ comment: comment }),
            headers: {
              'Content-Type': 'application/json',
            },
          });
          console.log('Response received:', response);

          if (response.ok) {
            document.location.replace('/dashboard');
          } else {
            console.log('Failed to update blog, status:', response.status);
            alert('Failed to update blog');
          }
        } catch (err) {
          console.error('Error during fetch:', err);
          alert('An error occurred while updating the blog');
        }
      
    
  };
  
  document
  //.querySelector('#comment-form')
 /*  .querySelector('#comment-form')
  .addEventListener('submit', newBlogComment);  
  console.log('query selector');
  document.querySelector('#comment-form').addEventListener('click', newBlogComment);
 */