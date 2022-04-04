/** @format */

let obj = [
  { id: 1, parentNode: "some paretnode", childNode: "some childNode" },
  { id: 2, parentNode: "parent 2", childNode: "child1" },
];
export default obj;

console.log(obj);

obj.sort((b, a) => {
  return a.id - b.id;
});

console.log(obj);
