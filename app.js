# Budgety
// budget module
var dataModule = (function (){
	
	var Income = function (id,desc,value){
		this.id : id,
		this.desc : desc,
		this.value : value
	}
	
	var Expense = function (id,desc,value){
		this.id : id,
		this.desc : desc,
		this.value : value
	}
	
	var dataArrays = {
			indItems : {
				exp = [],
				inc = []
			},
	        
			totals : {
				exp : 0,
				inc : 0
			}
	
	}
	
	}
	
	
})();


//UI  module
var UIModule = (function (){
	
	var DOMstrings = {
			type : '.add__type',
			desc : '.add__description',
			value : '.add__value'
	}
	
	return {
		getInput : function (){ 
			return{
	    type : document.querySelector(DOMstrings.type).value, 
	    desc : document.querySelector(DOMstrings.desc).value,
	    value : document.querySelector(DOMstrings.value).value}
		},
		
	    getDOMstrings : function () {
	    	return (DOMstrings);
	    }
	}
})();



// global app controller module
var ControllerModule = (function (UI,data){
	
	
	var startEL = function () {
		var CMDOMstrings = UI.getDOMstrings;
		CMDOMstrings.addBtn = '.add__btn';
		
		document.querySelector(CMDOMstrings.addBtn).addEventListener('click',function(){
			cmAddItem() });
		
		document.querySelector(CMDOMstrings.addBtn).addEventListener('keypress',function(moment){
		    if (moment.keyCode === 13){
		    	cmAddItem();
		    }
		})
		};
	cmAddItem = function (){
		input = UI.getInput();
		console.log(input);
		// add field to UI
		// add value to data
		// display budget and fields
	};
	return {
		init : function (){
			console.log('chal gya');
			startEL();
			
		}
		};
	})(UIModule,dataModule);
		
ControllerModule.init();
