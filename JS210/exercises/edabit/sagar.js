/* 

Create a function that returns which chapter is nearest to the page you're on. If two chapters are equidistant, return the chapter with the higher page number.

All page numbers in the dictionary will be valid integers.
Return the higher page number if ever two pages are equidistant (see last test case).

Problem:
  input: A chapters object with chapters being the key and the page numbers being the integers. 
  output: Return the chapter with the higher page number. 

  Requirements: 
  - Must return the chapter that is nearest to the page. 
  - If 2 chapters are equidistant, return the chapter with the higher page number. 
  - All page numbers in the dictionary will be valid integers. 
  - Must return the higher page number if 2 pages are equidistant. 
  - If more than 2 arguments, ignore beyond the 2nd argument. 
  - If less than 2 arguments, return null. 
  - If no arguments, return null. 
  - If the first argument is not an object OR if the first argument is an Array, return error message "First argument should be an object."
  - If the second argument contains numeric string, convert it to a number. 
  - If the second argument contains special characters, return an error message stating "Second argument needs to be a number (Must be an integer)".
  - If the second argument is 0 or negative number, return null. 
  - If the first argument contains an empty object, return null. 



"1.0!?"

  Mental Model: 
  {
  "Chapter 1" : 1,
  "Chapter 2" : 15,
  "Chapter 3" : 37
}, 10
|10 - 1 | => 9,
|15 - 10 | => 5,
|37 - 10 | => 27. 
Sort them in ascending 5, 9, 27 => 5. Return chapter 2 

{
  "New Beginnings" : 1,
  "Strange Developments" : 62,
  "The End?" : 194,
  "The True Ending" : 460
}, 200)
|200 - 1| => 199, 200 - 62 => 138, 200 - 194 => 6, 200 - 460 => 260 
199, 138, 6, 260 => 6. Return "The End?"

{
  "Chapter 1a" : 1,
  "Chapter 1b" : 5
}, 3

3 - 1 => 2 , 5 - 3 => 2
Return "Chapter 1b" since it contains higher page number. 

Data Structure:
Input: Chapter Object and PageNumber(Integer)

During Function Execution:- Use Arrays since we would need to sort key value pairs
based on the value of the page number. Use objects since we would need objects with 
keys sorted in ascending order based on the distance of pagenumber from the currentPageNumber.

Output: String representing the chapter with the pagenumber nearest to the 
current page

Algorithm:
- Edge cases:
  - If chapterObject == undefined AND currentPage == undefined:
    - Return null.

  - If currentPage == undefined
    - Return null.

  - If data type of chapterObject != 'object' OR chapterObject is an Array:
    - Return error message "First argument should be an object."

  - If the currentPage <= 0
    - Return null.

  - If the data type of currentPage is a string
    - Check if all characters of the string are numeric characters only using Regex
      - If all the characters are integer only:
        - Convert to number data type using `Number` explicit type conversion.
      - If not return "Second argument needs to be a number (Must be an integer)"

  - If the chapterObject is an empty object:
    Return null.

- Main cases:
  - Convert the given chapterObject into an array of key-value pairs.
  - Sort the array of key-value pairs based on the absolute difference between the pageNumbers of chapters and currentPage.
    - If the absolute differences are same:
      - Return the higher page Number

  - Return arrOfChaptersPages[0][0].

 */

function nearestChapter(chapterObject, currentPage) {
  // Edge cases
  if (chapterObject === undefined && currentPage === undefined) {
    return null;
  }

  if (currentPage === undefined) {
    return null;
  }

  if (typeof chapterObject !== 'object' || Array.isArray(chapterObject)) {
    return "First argument should be an object only.";
  }

  if (currentPage <= 0) {
    return null;
  }

  if (typeof currentPage === 'string') {
    if (currentPage.match(/[^\d+]/)) {
      return "Second argument needs to be a number (Must be an positive integer only)";
    } else {
      currentPage = Number(currentPage);
    }
  }
  // console.log("Current Page Number is " + currentPage);

  if (Object.keys(chapterObject).length === 0) {
    return null;
  }

  // Main cases
  let arrOfChaptersPages = Object.entries(chapterObject);
  // console.log(arrOfChaptersPages);
  arrOfChaptersPages.sort((chapterPagePair1, chapterPagePair2) => {
    let distance1 = Math.abs(chapterPagePair1[1] - currentPage);
    let distance2 = Math.abs(chapterPagePair2[1] - currentPage);

    if (distance1 > distance2) {
      return 1;
    } else if (distance1 < distance2) {
      return -1;
    } else {
      let page1 = chapterPagePair1[1];
      let page2 = chapterPagePair2[1];

      if (page1 > page2) {
        return -1;
      } else if (page1 < page2) {
        return 1;
      } else {
        return 0;
      }
    }
  });
  // console.log(arrOfChaptersPages);
  return arrOfChaptersPages[0][0];
}

let p = console.log;
console.log(nearestChapter({
  "Chapter 1": 1,
  "Chapter 2": 15,
  "Chapter 3": 37
}, 10)) // ➞ "Chapter 2"

console.log(nearestChapter({
  "New Beginnings": 1,
  "Strange Developments": 62,
  "The End?": 194,
  "The True Ending": 460
}, 200)) // ➞ "The End?"

console.log(nearestChapter({
  "Chapter 1a": 1,
  "Chapter 1b": 5
}, 3)) // ➞ "Chapter 1b"

p(nearestChapter({
  "Chap 1": 1,
  "Chap 2": 2,
})); // -> null 

p(nearestChapter()); // -> null. 

p(nearestChapter("Not an object", 1)); // -> 
// -> "First argument should be an object."
p(nearestChapter([], 1));
// -> "First argument should be an object."

console.log(nearestChapter({
  "Chapter 1": 1,
  "Chapter 2": 15,
  "Chapter 3": 37
}, "10")) // ➞ "Chapter 2"


console.log(nearestChapter({
  "Chapter 1": 1,
  "Chapter 2": 15,
  "Chapter 3": 37
}, "10.51!")) // ➞ "Second argument needs to be a number (Must be an integer)"

console.log(nearestChapter({
  "Chapter 1": 1,
  "Chapter 2": 15,
  "Chapter 3": 37
}, 0)); // -> null

console.log(nearestChapter({
  "Chapter 1": 1,
  "Chapter 2": 15,
  "Chapter 3": 37
}, -1)); // -> null 

console.log(nearestChapter({}, 1)); // -> null 