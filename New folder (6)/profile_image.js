const avatarInput = document.getElementById('avatar-input');
const avatarImage = document.getElementById('avatar-image');
const locationInput = document.getElementById('location-input');

avatarInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = () => {
    avatarImage.src = reader.result;
  };

  reader.readAsDataURL(file);
});

locationInput.addEventListener('input', () => {
  locationInput.value = locationInput.value.trim();
});