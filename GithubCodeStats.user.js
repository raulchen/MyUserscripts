// ==UserScript==
// @id             GithubCodeStats
// @name           Github Code Stats
// @version        1.0
// @namespace      
// @author         raulchen
// @description    
// @include     http*://github.com/*/*/graphs/contributors
// @installUrl		https://raw.githubusercontent.com/raulchen/MyUserscripts/master/GithubCodeStats.user.js
// @updateUrl		https://raw.githubusercontent.com/raulchen/MyUserscripts/master/GithubCodeStats.user.js
// @run-at         document-end
// ==/UserScript==

var codeStats=function(){

	var getSpanValue=function(s){
		return parseInt(s.innerHTML.replace(/[^0-9]/g,""));
	};

	var sumOfArray=function(x,y){
		return x+y;
	};

	var add=Array.prototype.slice.call(document.getElementsByClassName('a'))
		.map(getSpanValue).reduce(sumOfArray,0);

	var del=Array.prototype.slice.call(document.getElementsByClassName('d'))
		.map(getSpanValue).reduce(sumOfArray,0);

	if(add==0){
		setTimeout(codeStats,1000);
	}
	else{
		console.debug(add-del);
		var codeStatsDiv=document.createElement('div');
		codeStatsDiv.setAttribute('id','code-stats');
		codeStatsDiv.setAttribute('style', 'padding:2px 5px;position:fixed;' +
		                 'top:5px;left:5px;z-index:9999;font-size:15px;' +
		                 'background-color: #ddd; color: #000;');
		codeStatsDiv.innerHTML="<span>Lines: "+(add-del)+"</span>";
		document.body.appendChild(codeStatsDiv);
	}
};

setTimeout(codeStats,1000);