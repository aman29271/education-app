const country = document.getElementById('countryList');
const subject = document.getElementById('subjectList');
const professional = document.getElementById('professional');
const follower = document.getElementById('follower');

professional.addEventListener('click', showSubjectList);
follower.addEventListener('click', showCountryList);

function showSubjectList() {
  subject.setAttribute('name', 'subject');
  subject.style.display = professional.checked ? 'block' : 'none';
  country.style.display = 'none';
  country.removeAttribute('name');
}
function showCountryList() {
  country.setAttribute('name', 'country');
  country.style.display = follower.checked ? 'block' : 'none';
  subject.style.display = 'none';
  subject.removeAttribute('name');
}
