import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const emailRef = formRef.elements.email;
const textareaRef = formRef.elements.message;
const STORAGE_KEY = 'feedback-form-state';

formRef.addEventListener('input', throttle(onInputForm, 500));
formRef.addEventListener('submit', onSubmitForm);
populateMessage();

function onInputForm() {
  const email = emailRef.value;
  const message = textareaRef.value;
  const formData = {
    email,
    message,
  };

  const formDataJSON = JSON.stringify(formData);

  localStorage.setItem(STORAGE_KEY, formDataJSON);
}

function populateMessage() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  const savedMessageParse = JSON.parse(savedMessage);

  if (savedMessage) {
    emailRef.value = savedMessageParse.email;
    textareaRef.value = savedMessageParse.message;
  }
}

function onSubmitForm(evt) {
  evt.preventDefault();
  const messageAlert = 'Предупреждение !!!! Все поля должны быть заполнены';

  if (emailRef.value === '' || textareaRef.value === '') {
    return alert(messageAlert);
  }
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
