const Tour = require("./tourLib");

const getAllTours = (req, res) => {
  const tours = Tour.getAll();
  res.json(tours);
};

const createTour = (req, res) => {
  const {name, info, image, price} = req.body;
  const newTour = Tour.addOne(name, info, image, price);
  if (newTour) {
    res.json(newTour);
  } else {
    json.status(500).json({message: "Invalid input"});
  }
};

const getTourById = (req, res) => {
  const tourFound = Tour.findById(req.params.tourId);
  if (tourFound) {
    res.json(tourFound);
  } else {
    json.staus(404).json({message: "Tour not found"});
  }
};

const updateTour = (req, res) => {
  const tourId = req.params.tourId;
  const {name, info, image, price} = req.body;
  const updateTour = Tour.updateOneById(tourId, {name, info, image, price});
  if (updateTour) {
    res.json(updateTour);
  } else {
    res.status(404).json({message: "Invalid input"})
  }
};

const deleteTour = (req, res) => {
  const tourId = req.params.tourId;
  const deletedTour = Tour.deleteOneById(tourId);
  if (deletedTour) {
    res.json({message: "Tour deleted"});
  } else {
    res.status(404).json({mesage: "Tour not found"});
  }
};

module.exports = {
  getAllTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour,
};
