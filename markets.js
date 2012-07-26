/* Market Javascript Functions */

var facilities = {};
var customFacilities = {};
var MARKETS = {};
var NAME;
var REGION;
var INSTITUTION;
var TYPE;

function newMarketForm(){
	$('#sandbox_1 form p, button, select, input, br, b, option').replaceWith('');
	$('#sandbox_1 form').append('<p> Market Name:  <input type = "text" name = "market_name"/> </p>');
	$('#sandbox_1 form').append('<button name = "submit_New_Market" type="submit" onClick="openNewMarketForm()"> Submit </button>');
	document.getElementById('sandbox_1').style.display = 'none';					
	document.getElementById('sandbox_1').style.display = 'block';			
}
function openNewMarketForm(){
	window.TYPE = "steelblue"
	window.NAME = document.getElementById('sandbox_form')[0].value;
	$('#sandbox_1 form p, button, input, br, select, b, option').replaceWith('');
	$('.market_type ul').prepend('<li id = "' + window.NAME.trim() + '"><a style ="cursor:hand; cursor:pointer">' + window.NAME);
	document.getElementById('wrapper').style.display = 'none';					
	document.getElementById('wrapper').style.display = 'block';
	$.getJSON("", function(data){
		for(var i =0; i < data[1].length; i++){
				$('#sandbox_1 form').append('<p>' + data[1][i][0].toUpperCase() + '<input type="text" name ="' + data[1][i][0] +'" value ="' + data[1][i][1] + '"/> </p>');
			}
		$('#sandbox_1 form').append('<button name = "submit_Facility" type="button" onClick="printOutMarket()"> Submit </button>');
	});
	$('#sandbox_1 form').append('<button name = "submit_Facility" type="button" onClick="printOutMarket()"> Submit </button>');
	document.getElementById('sandbox_1').style.display = 'none';					
	document.getElementById('sandbox_1').style.display = 'block';
}
function printOutMarket(){

	function testing(){
		var length_2 = document.getElementById('sandbox_form').length;
		var market = {};
		market['Name'] = window.NAME;
		for(i=0; i<length_2-1; i++){
			market[document.getElementById('sandbox_form')[i].name] = document.getElementById('sandbox_form')[i].value;
		}
		market['circle'] = {
			name: window.NAME,
  			type: d3.svg.symbol("circle"),
    		size: 50,
    		x: 100,
    		y: 100,
    		id: window.NAME
		};
		return market;		
	}
	if(!MARKETS[window.NAME]){
		window.MARKETS[window.NAME] = testing();
		addNewCircle();
	}
	window.MARKETS[window.NAME] = testing();
	return MARKETS;
}
function updateSidebar(){
	$('ul li ul').each(function(){
	  	$(this).prev('a').find('.total').append('<div>'+ ($(this).find('li').length - $(this).find('li > ul > li').length - 1) +'</div>');
	});
}