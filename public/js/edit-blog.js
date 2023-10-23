async function editFormHandler(event) {
    event.preventDefault();
    const title = document.querySelector('#title').value;
    const contents = document.querySelector('#contents').value;
        
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    const response = await fetch(`/api/blogs/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        title,
        contents,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  

    if (response.ok) {
      document.location.replace(`/blog/${id}`);
    } else {
      alert('Failed to edit blog');
    }
  }
  
  document.querySelector('.edit-blog-form').addEventListener('submit', editFormHandler);
  