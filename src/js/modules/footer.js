let thisDate = new Date()
    .toLocaleDateString()
    .split('.')
    .reverse()
    .join('.')
    .substring(0, 4);

let footerDate = document.querySelector('.footer span');

footerDate.innerHTML = thisDate;
