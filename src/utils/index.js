export const constructImageSource = (image) => {
  const { id, server, farm, secret } = image;
  let url;

  if (id && server && farm && secret) {
    url = `http://farm${farm}.static.flickr.com/${server}/${id}_${secret}_m.jpg'`;
  }
  return url
}

export const downloadCsvFile = (data, filename) => {
  const csvData = ConvertToCSV(data);
  const anchorElement = document.createElement('a');
  anchorElement.setAttribute('style', 'display:none;');
  document.body.appendChild(anchorElement);
  const blob = new Blob([csvData], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  anchorElement.href = url;

  const isIE = false || !!(document).documentMode;

  if (isIE) {
    const retVal = navigator.msSaveBlob(blob, `${filename}.csv`);
  } else {
    anchorElement.download = `${filename}.csv`;
  }

  anchorElement.click();
}

const ConvertToCSV = (jsonData) => {
  const array = typeof jsonData !== 'object' ? JSON.parse(jsonData) : jsonData;
  let str = '';
  let row = '';

  for (let index in jsonData[0]) {
    // Now convert each value to string and comma-seprated
    row += index + ',';
  }
  row = row.slice(0, -1);
  // append Label row with line break
  str += row + '\r\n';

  for (let i = 0; i < array.length; i++) {
    let line = '';
    for (let index in array[i]) {
      if (line != '') line += ',';
      line += '"' + array[i][index] + '"';
    }

    str += line + '\r\n';
  }
  return str;
}

export const renderTitle = (title) => {
  let titleContent = 'No Title';
  if (title) {
    titleContent = title.length > 10 ? title.slice(0, 10) + '...' : title
  }

  return titleContent
}