if( typeof doH == 'undefined' ){
	function doH(e,a,r,t){
		if( window.location.host != "steamcommunity.com" ) return alert("Bookmarklet only works on Steam Community");
		if( document.URL.split("/")[3] != "profiles" && document.URL.split("/")[3] != "id" ) return alert("Bookmarklet only works on Steam Community profile pages");
		if( ! document.forms[1] || document.forms[1].getElementsByTagName("textarea").length < 1 ) return alert("Bookmarklet only works on valid profiles that you are allowed to comment on");

		e=document.forms[1];
		e.getElementsByTagName("textarea")[0].value="â™¥";
		e.getElementsByTagName("span")[2].click();
	}
}

doH();
