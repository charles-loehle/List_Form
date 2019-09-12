/*
using an object literal add items to a blank array and display the items.
*/

let formObject = {

  parentDiv: document.querySelector(".parent-div"),

  input: document.createElement('input'),

  ul: document.createElement('ul'),

  arr: [],

  buildForm: function () {
    let form = document.createElement("form");
    this.parentDiv.appendChild(form);

    let formGroupDiv = document.createElement('div');
    formGroupDiv.className = "form-group";
    form.appendChild(formGroupDiv);

    let formLabel = document.createElement('label');
    formLabel.innerText = "Add Items To an Array"
    formGroupDiv.appendChild(formLabel);

    this.input.setAttribute('type', 'text');
    this.input.className = "form-control"
    formGroupDiv.appendChild(this.input);

    let button = document.createElement('input');
    button.setAttribute('type', 'submit');
    button.className = "btn btn-primary";
    button.setAttribute('value', 'Add');

    form.appendChild(button);
    this.input.addEventListener('keyup', this.getInputText);
    form.addEventListener('submit', this.onSubmit);

    formGroupDiv.appendChild(this.input);

    this.createUL();
  },

  getInputText: function (e) {
    console.log(e.target.value);
  },

  createUL: function () {

    this.ul.className = "list-group mt-3";
    this.parentDiv.appendChild(this.ul);
  },

  onSubmit: function (e) {
    e.preventDefault();

    formObject.arr.push(formObject.input.value);
    console.log(formObject.arr);
    formObject.input.value = '';

    let li = document.createElement('li');
    li.className = "list-group-item";

    formObject.arr.map((item, index) => li.innerText = `Element ${index} = ${item}`);
    formObject.ul.appendChild(li);
  }
}
formObject.buildForm();















