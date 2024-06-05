let form = document.querySelector('form');

form.addEventListener('submit', (key) => {
  key.preventDefault();

  let height = parseInt(document.querySelector('#height').value);
  console.log(height);
  let weight = parseInt(document.querySelector('#weight').value);
  let result = document.querySelector('.result');
  let weightguide = document.querySelector('.weight_guide');

  if (height === ' ' || height < 0 || isNaN(height)) {
    result.innerHTML = `please enter a valid heigh${height}`;
  } else if (weight === ' ' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `please enter a valid heigh${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    console.log(bmi);
    result.innerHTML = `<span> The Result is :- ${bmi}</span>`;

    if (bmi < 18.6) {
      weightguide.innerHTML = 'Under weight';
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      weightguide.innerHTML = 'Noraml Range';
    } else {
      weightguide.innerHTML = 'OverWeight';
    }
  }
});
