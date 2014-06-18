
// ******************
jQuery("h2 a").each(function (index) {
  console.log(this.innerHTML)
})


// ******************
function wgetList(filter) {

  var linklist = document.getElementsByTagName("a");
  for (var i = 0; i < linklist.length; i++) {
    if (linklist[i].innerHTML == '../' || linklist[i].innerHTML == undefined) {
      continue
    }


    if (linklist[i].innerHTML.indexOf(filter)>0) {
     console.log('wget ' + linklist[i].href + ' -O '+linklist[i].innerHTML);
    }
  }
}

// ******************

jQuery("h3 a").each(function (index) {
  console.log("=HYPERLINK('"+this.href+"', '"+ this.innerHTML+"')");
})

// ******************

var link ='';

jQuery("li.has-submenu ul li.has-submenu ul li a").each(function (index) {
  link +='=HYPERLINK("'+this.href+'";"'+this.innerHTML+'")			'+this.href+"\n";
})

console.log(link);

// ******************
link ='=HYPERLINK("'+window.location.href+'";"'+jQuery('h1').text()+'")							'+window.location.href+"\n";
console.log(link);
jQuery("h2 a").each(function (index) {
  link ='	=HYPERLINK("'+this.href+'";"'+this.innerHTML+'")						'+this.href+"\n";
  console.log(link);
})

console.log(link);

