function convertData(data) {
  return data.map((result) => {
    return result.toJSON();
  });
}

module.exports = convertData;
