document.addEventListener('DOMContentLoaded', () => {
    const feedbackForm = document.getElementById('feedbackForm');
    feedbackForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert("Thank you for your feedback!");
      feedbackForm.reset();
    });
  });
  