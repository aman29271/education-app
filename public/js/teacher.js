const new_password = document.getElementById('new_password');
const confirm_password = document.getElementById('confirm_password');
const current_password = document.getElementById('current_password');
const change_btn = document.getElementById('change');
const successMsg = document.getElementById('success');
const dangerMsg = document.getElementById('danger');

change_btn.addEventListener('click', clickHandler);

function clickHandler(e) {
  e.preventDefault();
  if (!passwordMatcher(new_password.value, confirm_password.value)) {
    logError('Password Do not match');
  } else {
    change_btn.classList.add('is-loading');
    let formData = `current_password=${current_password.value}&new_password=${new_password.value}&confirm_password=${confirm_password.value}`;
    send('/profile/teacher/settings/change-password', formData);
  }
}
function send(url, data) {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', url, true);
  xhr.withCredentials = true;
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onload = function () {
    if (xhr.status === 200) {
      const response = JSON.parse(xhr.response);
      if (response.error) {
        logError(response.message);
      } else {
        logSuccess(response.message);
      }
    } else {
      logError('An Error Ocurred');
    }
  };
  xhr.send(data);
}
function logError(msg) {
  successMsg.classList.add('is-hidden');
  dangerMsg.textContent = msg;
  dangerMsg.classList.remove('is-hidden');
  change_btn.classList.remove('is-loading');
  clearFormValue();
}
function logSuccess(msg) {
  successMsg.textContent = msg;
  successMsg.classList.remove('is-hidden');
  dangerMsg.classList.add('is-hidden');
  change_btn.classList.remove('is-loading');
  clearFormValue();
}
function clearFormValue() {
  current_password.value = '';
  new_password.value = '';
  confirm_password.value = '';
}
function passwordMatcher(str1, str2) {
  return str1 === str2;
}
