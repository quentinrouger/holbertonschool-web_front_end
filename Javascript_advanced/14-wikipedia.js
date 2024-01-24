function createElement(data) {
  const paragraph = document.createElement('p');
  paragraph.textContent = data;
  document.body.appendChild(paragraph);
}

function queryWikipedia(callback) {
  const xhr = new XMLHttpRequest();
  const url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*';

  xhr.open('GET', url);

  xhr.responseType = 'json';
  xhr.send();
  xhr.onload = function () {
    callback(xhr.response.query.pages[21721040].extract);
  };
  xhr.onerror = function () {
    alert('Request failed');
  };
}

// Call queryWikipedia with createElement as callback
queryWikipedia(createElement);
