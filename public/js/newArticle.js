document.addEventListener('DOMContentLoaded', () => {


  
    const newFormHandler = async (event) => {
        event.preventDefault();
      
        
        const title = document.querySelector('#article-title').value.trim();
        const content = document.querySelector('#article-content').value.trim();
        const user_id = document.querySelector('#user_id').value.trim();
      
        if (title && content) {
          const response = await fetch(`/api/article`, {
            method: 'POST',
            body: JSON.stringify({ title, content, user_id }),
            headers: {
              'Content-Type': 'application/json',
            },
          });
      
          console.log(response);
    
          if (response.ok) {
            document.location.replace('/');
          } else {
            alert('Failed to create article');
          }
        }
      };
    
      document
      .querySelector('#new-article-form')
      .addEventListener('submit', newFormHandler);
    
    });