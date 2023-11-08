//taken from https://templaterr.neocities.org/topbar/ !

var html = '<div class="navlink"><a href="index.html">Home</a></div>';

var section1 = ['About', 'Art', 'Code']
for (i = 0; i<section1.length; i++){
	html += '<div class="navlink"><a href="' + section1[i] + '.html">' + section1[i] + '</a></div>'
}

document.getElementById("templaterr-topbar").innerHTML = html;