var app = angular.module("app", []);

app.controller('MainCtrl', function() {
	var vm = this;
  	vm.output = "0";
  	vm.inOperation = false;
  	vm.num1 = 0;
   
  	vm.updateOutput = function(btn) {
		if(vm.newNumber){
			vm.output = 0;	
		}
		if(vm.output == "0" || vm.newNumber) {
			vm.output = btn;
			vm.newNumber = false;
		} else {
			vm.output += String(btn);
		}
	};

	vm.operate = function(op) {
		if(vm.output && !vm.inOperation){
			vm.num1 = vm.output;
			vm.output += op;
			vm.inOperation = true;
		}else if(vm.output.length > vm.num1.length+1){
			vm.output = eval(vm.output);
			vm.output += op;
		} 
	};

	vm.equal = function() {
		if(vm.output.length > vm.num1.length+1){
			vm.output = eval(vm.output);
      vm.num1 = vm.output;
		}else{
			vm.output = vm.num1;
		}
	};
	
}
);
