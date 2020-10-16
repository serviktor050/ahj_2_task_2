import data from './data.js';

const tableHeaders = document.querySelectorAll('.headers');
const tableBody = document.querySelector('.table-body');

const idUp = [...data.sort((a, b) => a.id - b.id)];
const idDown = [...data.sort((a, b) => b.id - a.id)];

const titleUp = [...data.sort((a, b) => ('' + a.title).localeCompare(b.title))];
const titleDown = [...data.sort((a, b) => ('' + b.title).localeCompare(a.title))];

const yearUp = [...data.sort((a, b) => a.year - b.year)];
const yearDown = [...data.sort((a, b) => b.year - a.year)];

const imdbUp = [...data.sort((a, b) => a.imdb - b.imdb)];
const imdbDown = [...data.sort((a, b) => b.imdb - a.imdb)];

const drawTableBody = function (array) {
  tableBody.innerHTML = '';
  array.forEach((item) => {
    tableBody.insertAdjacentHTML('beforeend', `
        <tr>
        <td>${item.id}</td>
        <td>${item.title}</td>
        <td>(${item.year})</td>
        <td>imdb: ${item.imdb.toFixed(2)}</td>
        </tr>
        `);
  });
};

const sortDirection = function (item, direction) {
  tableHeaders.forEach((element) => {
    if (element.classList.contains('sort-up') || element.classList.contains('sort-down')) {
      element.className = 'headers';
    }
  });

  if (direction === 'up') {
    tableHeaders[item].classList.add('sort-up');
  }
  if (direction === 'low') {
    tableHeaders[item].classList.add('sort-down');
  }
};

drawTableBody(data);

let counter = 1;
setInterval(() => {
  switch (counter) {
    case 1:
      drawTableBody(idDown);
      sortDirection(0, 'low');
      break;
    case 2:
      drawTableBody(idUp);
      sortDirection(0, 'up');
      break;
    case 3:
      drawTableBody(titleDown);
      sortDirection(1, 'low');
      break;
    case 4:
      drawTableBody(titleUp);
      sortDirection(1, 'up');
      break;
    case 5:
      drawTableBody(yearDown);
      sortDirection(2, 'low');
      break;
    case 6:
      drawTableBody(yearUp);
      sortDirection(2, 'up');
      break;
    case 7:
      drawTableBody(imdbDown);
      sortDirection(3, 'low');
      break;
    case 8:
      drawTableBody(imdbUp);
      sortDirection(3, 'up');
      break;
    default:
      counter = 0;
      break;
  }
  counter += 1;
}, 2000);
