// {
//   "name": "Best of Paris in 7 Days Tour",
//   "info": "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
//   "image": "https://www.course-api.com/images/tours/tour-1.jpeg",
//   "price": "1,995"
// }

let tours= [];
let nextId = 1;

const getAll = () => {
  return tours;
}
const addOne = (name, info, image, price) => {
  if (!name || !info|| !image || !price ) {
    return false;
  }
  const tour = {id: nextId++, name, info, image, price};
  tours.push(tour);
  return tour;
}
const findById = (id) => {
  const numbericId = Number(id);
  const tour = tours.find(tour => tour.id === numbericId)
  return tour ? tour : false;
}

const updateOneById = (id, tourData) => {
  const tourFound = findById(id);
  if (tourFound) {
    if (tourData.name) {
      tourFound.name = tourData.name;
    }    
    if (tourData.info) {
      tourFound.info = tourData.info;
    }
    if (tourData.image) {
      tourFound.image = tourData.image;
    }
    if (tourData.price) {
      tourFound.price = tourData.price;
    }
    return tourFound;
  } return false;
}

const deleteOneById = (id) => {
  const deletedTour = findById(id);
  if (deletedTour) {
    const initLength = tours.length;
    tours = tours.filter(tour => tour.id !== deletedTour.id); 
    return tours.length < initLength;
  }
  return false;
}

if (require.main === module) {
  // Add tour
  let result = addOne(
    "Best of Paris in 7 Days Tour",
    "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
    "https://www.course-api.com/images/tours/tour-1.jpeg",
    "1,995"
  ); ;
  console.log(result);
  // Add another car
  result = addOne("tour name 2", "info2", "image2", "price");
  console.log(result);

  console.log("getAll called:", getAll());

  console.log("findById called:", findById(1));

  console.log(
    "updateOneById called:",
    updateOneById(1, {name: "name123"})
  );
  console.log("findById called after item updated:", findById(1));

  console.log("deleteOneById called:", deleteOneById(1));
  console.log("findById called after item deleted:", findById(1));
}

module.exports = {
  getAll,
  addOne,
  findById,
  updateOneById,
  deleteOneById,
};