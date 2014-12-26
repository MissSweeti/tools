// Usage: http://steamcommunity.com/my/badges/, b(true) to count already-crafted badges or b(false) to not.

function b(u,h,a,d,g,e,s,b,o,i){
	u = u ? u : false;
	
	a=[];
	d=0;
	
	Array.prototype.slice.call(document.getElementsByClassName("badge_row")).forEach(function(v){
		if( typeof v.getElementsByClassName("badge_progress_info")[0] === 'undefined' ) return;
		g = v.getElementsByClassName("badge_progress_info")[0].innerHTML;
		e = g.replace(" cards collected", "").replace(" of", "");
		if( g.indexOf("for next level") > -1 ){
			d++;
			if( ! u) return;
		}
		e = e.replace(" for next level", "");
		e = e.split(" ");
		if( parseInt(e[1]) == NaN ) return;
		a[parseInt(e[1])] = (typeof a[parseInt(e[1])] === 'undefined' ) ? 1 : a[parseInt(e[1])]+=1;
	});
	
	var b = 0;
	var s = (u ? "C" : "NOT c" ) + "ounting " + d + " completed sets, you have:\n";
	a.forEach(function(v,k){
		if( k < 5 ) return;
		s+="..." + a[k] + " badge(s) with " + k + " cards in set\n";
		b+=a[k];
	});
	
	s+="...for a total of " + b + " badges! Phew."

	var o = document.createElement("div");
	var i = document.createElement("pre");
	o.innerHTML = s;
	i.appendChild(l);
	i.style="display: block; z-index: 1;"
	document.getElementsByClassName("badges_sheet")[0].insertAdjacentHTML("afterbegin", document.createElement("div").appendChild(i).innerHTML);

	return s;
}
