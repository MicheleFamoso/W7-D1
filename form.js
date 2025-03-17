const petNameInput = document.getElementById("PetName");
const owenNameInput = document.getElementById("Owen");
const speciesInput = document.getElementById("Species");
const breedInput = document.getElementById("Breed");
class Pet {
  constructor(_petName, _owen, _species, _breed) {
    this.petName = _petName;
    this.owen = _owen;
    this.species = _species;
    this.breed = _breed;
  }
  comparize = function (altro) {
    if (this.owen === altro.owen) {
      return true;
    } else {
      return false;
    }
  };
}
const petList = document.getElementById("Petlist");
const pets = [];
const form = document.getElementById("Pet-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const newpet = new Pet(
    petNameInput.value,
    owenNameInput.value,
    speciesInput.value,
    breedInput.value
  );
  pets.push(newpet);
  console.log(pets);
  for (let i = 0; i < pets.length; i++) {
    console.log(newpet.comparize(pets[i]));
  }
  const listItem = document.createElement("li");
  listItem.textContent = `${newpet.petName} (${newpet.species}, ${newpet.breed}) - Owner: ${newpet.owen}`;
  petList.appendChild(listItem);

  form.reset();
});
