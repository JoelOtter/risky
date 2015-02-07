function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;
}

window.onload = function() {
    var url = getURLParameter('url');
    document.getElementById('view').src = url;
    document.getElementById('view').style['-webkit-filter'] = 'blur(2px)';
};
