const follower = document.getElementById('follower');
const country = document.getElementById('countryList');
const professional = document.getElementById('professional');

const submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', (e) => {
  if (
    document.getElementById('password').value !== document.getElementById('confirm_password').value
  ) {
    e.preventDefault();
    const message = document.getElementById('message');
    message.style.display = 'block';
    message.textContent = 'Password Does not match';
  }
});
follower.addEventListener('click', showCountryList);

professional.addEventListener('click', () => {
  professional.checked ? (country.style.display = 'none') : '';
});
function showCountryList() {
  country.style.display = follower.checked ? 'block' : 'none';
}
