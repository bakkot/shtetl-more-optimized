var comments = document.querySelectorAll('.commentlist > li');
var ps = document.querySelectorAll('.commentlist > li > p');
for (var i = 0; i < ps.length; ++i) {
  ps[i].innerHTML = ps[i].innerHTML.replace(/^[^<>#]*#([0-9]+)(?=\s?(?:[.;:,\-\u2013\u2014]|<br>|$))/, function (m, c) { return m.length > 50 ? m : '<a href=#'+comments[c-1].id+'>'+m+'</a>'; });
}
