if(window.location.host == 'www.google.com') {
	var style = document.createElement('style');
    var cssText = 'a:visited { font-size:20px!important;color:#6b0505;}';
    style.appendChild(document.createTextNode(cssText));
    document.getElementsByTagName('head')[0].appendChild(style);
}