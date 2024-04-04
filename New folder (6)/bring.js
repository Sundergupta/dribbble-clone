const finishBtn = document.getElementById('finish-btn');
const options = document.querySelectorAll('input[name="purpose"]');

finishBtn.addEventListener('click', () => {
  const selectedOption = Array.from(options).find(option => option.checked);
  if (selectedOption) {
    const selectedValue = selectedOption.value;
    // Handle the selected option here, e.g., submit data to server
    console.log('Selected option:', selectedValue);
  } else {
    alert('Please select an option.');
  }
});