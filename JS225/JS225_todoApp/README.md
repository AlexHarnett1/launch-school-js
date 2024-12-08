This application was built using Node.js v23.2.0.

Todo Class

isWithinMonthYear Method:
- Requires two arguments (month and year). If either argument is missing, the method returns false.
- Returns false if the Todo object does not have both month and year defined.
- Both the month and year must match for the method to return true.
- No data validation for the month parameter is implemented to allow flexibility in formats, such as 'Jan', 'January', or '1'.

Constructor:
- Requires an object as input. The object must include a title property, or an error will be thrown.
- All other properties are optional.


TodoManager Class

- The TodoManager class consists entirely of static methods.
- Each method requires an instance of TodoList to be passed as an argument.


TodoList Class

#cloneTodo (Internal Method):
- Ensures that Todo objects can be copied and shared without risk of external data manipulation.
- Creates a new object of type Todo and assigns it all the properties and methods of the original Todo. This ensures a new Todo instance while preserving properties like id.
- Assumes Todo properties will not contain nested arrays or objects. If they do, they could still be modified externally.

#getTodoInternal (Internal Method):
- Provides a reference to the original Todo object for updating.
- The getTodo method returns a clone of the Todo object, so it cannot be used for updates.


Test File
- The test file works identically to the one used in practice for this assessment.
- Open the index_todoApp.html file in a web browser to view test results for pass/fail status.