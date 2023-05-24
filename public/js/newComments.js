document.addEventListener('DOMContentLoaded', () => {


  
    const newFormHandler = async (event) => {
        event.preventDefault();
      
     
        const content = document.querySelector('#comment-content').value.trim();
        const user_id = document.querySelector('#user_id').value.trim();
      
        if (content && user_id) {
          const response = await fetch(`/api/comments`, {
            method: 'POST',
            body: JSON.stringify({ content, user_id }),
            headers: {
              'Content-Type': 'application/json',
            },
          });
      
          console.log(response);
    
          if (response.ok) {
            document.location.replace('/comments');
          } else {
            alert('Failed to create comment');
          }
        }
      };
    
      document
      .querySelector('#new-comment-form')
      .addEventListener('submit', newFormHandler);
    
    });