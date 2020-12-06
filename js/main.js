//java-script
console.log(document.getElementById('my-header'));
let headerTitle = document.getElementById('my-header');
let title = document.getElementById('title-content');
console.log(headerTitle);
headerTitle.textContent = 'حسینعلی حسینی';
title.innerText = 'تمرین 2';
console.log(headerTitle.innerText);
title.style.borderBottom = 'solid 3px #000';
