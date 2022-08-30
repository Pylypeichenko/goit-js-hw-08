import throttle from 'lodash.throttle';

const emailInput = document.querySelector('input');
const messageInput = document.querySelector('textarea');
const form = document.querySelector('form');
const feedbackForm = 'feedback-form-state';

addPreviousDataToFeedbackForm();

emailInput.addEventListener('input', throttle(setLocaleStorageInput, 500));
messageInput.addEventListener('input', throttle(setLocaleStorageInput, 500));
form.addEventListener('submit', throttle(submitForm, 500));

function setLocaleStorageInput() {
  const data = {
    email: emailInput.value,
    message: messageInput.value,
  };

  localStorage.setItem(feedbackForm, JSON.stringify(data));
}

function addPreviousDataToFeedbackForm() {
  const previousData = JSON.parse(localStorage.getItem(feedbackForm));

  if (previousData) {
    emailInput.value = previousData.email;
    messageInput.value = previousData.message;
  }
}

function submitForm(e) {
  e.preventDefault();

  const previousData = JSON.parse(localStorage.getItem(feedbackForm));

  console.log(`User's email: ${previousData.email}`);
  console.log(`User's message: ${previousData.message}`);

  localStorage.removeItem(feedbackForm);
  e.target.reset();
}
