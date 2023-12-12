// Function to generate navigation links from the provided HTML structure
function generateNavbarLinks() {
	var navbarElement = document.querySelector('.navbar-desktop');
	var links = navbarElement.getElementsByTagName('a');
	var html = '';
  
	for (var i = 0; i < links.length; i++) {
	  var linkName = links[i].textContent;
	  var linkPath = links[i].getAttribute('href');
	  console.log('Link Name:', linkName);
  	console.log('Link Path:', linkPath);
	  html += '<div class="navlink"><a href="' + linkPath + '">' + linkName + '</a></div>';
	}
  
	// Set the generated navbar links to the "navbar-desktop" element
	document.getElementById('navbar-desktop').innerHTML = html;
  }
  
  // Load navbar links on page load
  window.addEventListener('load', generateNavbarLinks);








//   //referenced from https://templaterr.neocities.org/topbar/

// var html = '<div class="navlink"><a href="index.html">Home</a></div>';

// var section1 = ['About', 'Art', 'Code']
// for (i = 0; i<section1.length; i++){
// 	html += '<div class="navlink"><a href="' + section1[i] + '.html">' + section1[i] + '</a></div>'
// }

// document.getElementById("navbar-desktop").innerHTML = html;

