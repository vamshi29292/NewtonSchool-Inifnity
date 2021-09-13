// Element selection
// document.documentElement => reference to html node.
// document.head => reference to head node.
// document.body => reference to body node.

// node.hasChildNodes() => Boolean;
// node.firstChild => reference to firstChildNode of the given node.
// node.firstElementChild => reference to firstChildNode which is an element node.
// node.lastChild => reference to lastChildNode of the given node.
// node.lastElementChild => reference to lastChildNode which is an element node.
// node.childNodes => collection of all child nodes of the given node.

// node.nextSibling => reference to the next sibling of the node.
// node.nextElementSibling => reference to the next sibling which is an element node.
// node.previousSibling => reference to the previous sibling of the node.
// node.previousElementSibling => reference to the previous sibling which is an element node.

// Node search methods
// document.getElementById => accepts id of an element as argument and finds it.
// document.getElementsByClassName
// document.getElemetsByTagName
// document.getElementsByName

// document.querySelector
// document.querySelectorAll
// querySelector and querySelectorAll can be called on any node. They use css selectors to search for desendant nodes.
// querySelectorAll returns a collection of all nodes that match the selector. querySelector returns the first node that matches.

const shouldChangeHeading = confirm("Change heading?")

if (shouldChangeHeading) {
  const primaryHeadingNode = document.getElementById("heading1");
  primaryHeadingNode.innerHTML = "Dummy heading"
}

const shouldChangeSubHeading = confirm("Change subHeading?")

// if (shouldChangeSubHeading) {
//   const subHeadingNode = document.body.querySelector(".heading2");
//   subHeadingNode.innerHTML = "<p>Changed sub heading</p>";
// }

if (shouldChangeSubHeading) {
  const subHeadingNode = document.body.getElementsByClassName("heading")[1];
  console.log(subHeadingNode);
  subHeadingNode.innerHTML = "<p>Changed sub heading</p>";
}

