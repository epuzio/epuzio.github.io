// Function to fetch and include the navbar content


// Function to generate navigation links from the provided HTML structure
function generateNavbarLinks() {
	console.log('Generating navbar links...');
	var navbarElement = document.querySelector('.navbar-desktop');
	if (navbarElement){
		var links = navbarElement.getElementsByTagName('a');
		var html = '';
	
		for (var i = 0; i < links.length; i++) {
			var linkName = links[i].textContent;
			var linkPath = links[i].getAttribute('href');
			console.log('Link Name:', linkName);
			console.log('Link Path:', linkPath);
			html += '<div class="navlink"><a href="' + linkPath + '">' + linkName + '</a></div>';
		}
	
		document.getElementById('navbar-links').innerHTML = html;
	}
	else{
		console.log('navbar element not found');
	}
};

window.addEventListener('DOMContentLoaded', function () {
	fetch('pages.html')
		.then(response => response.text())
		.then(data => {
			document.getElementById('navbar-desktop').innerHTML = data;
			generateNavbarLinks();
		})
		.catch(error => console.error('Error fetching navbar:', error));
	})
	.catch(error => console.error('Error fetching navbar:', error));
