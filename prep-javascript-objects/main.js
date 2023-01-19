var person = {
  firstName: 'Raymond',
  lastName: 'Balagso',
  hobby: 'Sleeping'
};
console.log('person', person);

var fullName = person.firstName + ' ' + person.lastName;
console.log("This person's name is: ", fullName + '.');

fullName.job = 'Director';
console.log("This person's job is: ", 'Director' + '.');

fullName.previousJob = 'Producer';
console.log("This person's preious job is: ", 'Producer' + '.');

person = {
  firstName: 'Raymond',
  lastName: 'Balagso',
  hobby: 'Sleeping',
  job: 'Director',
  previousJob: 'Producer'
};
console.log('The Complete person object:', person);
