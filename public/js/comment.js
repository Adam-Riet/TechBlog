const commentFormHandler = async (event) => {
    event.preventDefault();
  
    // Assuming the input field for comment has id 'comment-text'
    const comment_text = document.querySelector('#comment-text').value.trim();
  
    // Assuming you're on the page of the post and have the post id available
    const post_id = document.querySelector('#post-id').value; 
  
    if (comment_text && post_id) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ comment_text, post_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        // Reload the page so the new comment appears
        document.location.reload();
      } else {
        alert('Failed to post comment');
      }
    }
  };
  
  document
    .querySelector('.comment-form')
    .addEventListener('submit', commentFormHandler);
  