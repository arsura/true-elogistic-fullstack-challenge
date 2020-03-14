function justTwoHundred(req, res) {
  res.status(200).json({
    status: 200,
    health: 'OK'
  });
}

module.exports = { justTwoHundred };