const sortInDescendingOrder = (listOfObjects, key) => {
  const listOfObjectsCopy = [...listOfObjects];
  listOfObjectsCopy.sort(
    (val2, val1) => val1[key] - val2[key]
  );
  return listOfObjectsCopy;
};
export default sortInDescendingOrder;
