document.addEventListener('DOMContentLoaded', () => {


  
    const newFormHandler = async (event) => {
        event.preventDefault();
      
        
        const title = document.querySelector('#tips-title').value.trim();
        const content = document.querySelector('#tips-content').value.trim();
        const user_id = document.querySelector('#user_id').value.trim();
      
        if (title && content) {
          const response = await fetch(`/api/tips`, {
            method: 'POST',
            body: JSON.stringify({ title, content, user_id }),
            headers: {
              'Content-Type': 'application/json',
            },
          });
      
          console.log(response);
    
          if (response.ok) {
            document.location.replace('/tips');
          } else {
            alert('Failed to create tip');
          }
        }
      };
    
      document
      .querySelector('#new-tip-form')
      .addEventListener('submit', newFormHandler);
    
    });