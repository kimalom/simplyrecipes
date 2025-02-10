const hamburger = document.querySelector('.header__hamburger');
const navigation = document.querySelector('.header__nav');

hamburger.addEventListener('click', e => {
  if (navigation.classList.contains('show-links')) {
    navigation.classList.remove('show-links');
    navigation.classList.add('hide-links');
  } else {
    navigation.classList.remove('hide-links');
    navigation.classList.add('show-links');
  }
});
