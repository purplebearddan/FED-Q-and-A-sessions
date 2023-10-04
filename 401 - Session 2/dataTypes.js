// Data Types
// - String - has speech marks
// - Number - just a number, without speech marks
// - Boolean - true / false
// - Array - A list, uses [] and numbers for positions (indices, index), you can't see the numbers and they start at 0
// - Object - uses {} and names for positions (key/value pairs)
// - null - litterally nothing

// this is a string, we can tell it's a
// string because it has speech marks
const stringExample = "I'm a string";
// because this is a string it has
// access to "string methods and properties"

// we don't have to use a variable name to
// access properties of a string, we can access
// the string methods and properties becuase its
// a sting not because its a variable

// using dot notation we can access the length of a stirng and this is a property on ALL strings
"I'm a string".length;
stringExample.length;
// this is a property, you can tell by the lack of brackets on the end, properties don't do anything, they are just details about the object

"I'm a string".toUpperCase();
stringExample.toUpperCase();
// this is a method AKA Function, you can tell by the brackets on the end, we call 'functions' methods inside of an object and they are called functions when in the global scope

// concatination
// don't do this
const firstName = "Dan";
const lastName = "Monaghan";

const fullName = firstName + lastName;

// do this
const templateFullName = ` - ${firstName} ${lastName}`;

let text = "";

for (
  let i = 0; // count
  i < 10; // condition
  i++ // action
) {
  if (i === 3) {
    break;
  }
}
