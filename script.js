let simpleArray = ['one', 2, 'three', true, false, undefined, null]; 
let complexArray = [ [ { one: 1, two: 2 }, 
					  { three: 3, four: 4 } ]
					, [ { a: "a", b: "b" }, 
					   { c: "c", d: "d" } ] 
				     ];
let yourArray = ['thirty', 2007, true, 26, 'love'];
document.getElementById("simpleArray").innerHTML=simpleArray.length;
document.getElementById("complexArray").innerHTML=complexArray.length;
document.getElementById("yourArray").innerHTML=yourArray.length;
