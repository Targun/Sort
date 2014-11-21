(function() {
	'use strict';

	angular
		.module('app')
		.controller('MainController' , MainController);

	function MainController(MainService){
		var vm = this;

		vm.bucketSort = bucketSort;
		vm.runner = runner;
		vm.graphing = graphing;
		vm.grapher = grapher;
		vm.percentDone = 0;



		///

		function bucketSort(ranArr){
			var start = window.performance.now();

			var beef = [];
			for(var i = 0; i < 1001; i++){
				beef.push(0);
			}

			for(i = 0; i < ranArr.length; i++){
				beef[ranArr[i]]++  
			};

			var chicken = []
			for(i = 0; i < beef.length; i++){
				for(var j = 0; j<beef[i]; j++){
					chicken.push(i);
				}
			};

			var end = window.performance.now();

			return end - start
		};

		function runner(bam, func, ranArr){
			var average = 0;
			for(var i = 0; i < bam; i++){
				average += func(ranArr);
			}
			return average/bam;
		}


		function graphing(func1, func2, numArr1, numArr2){
			var bacon = [];
				bacon.push(runner(1000, func1, numArr1));
				bacon.push(runner(1000, func2, numArr2));
			return bacon;
		}

		function grapher(func1, func2){
			var theBacon = [['data1'],['data2']]
			for(var i = 0; i < 10; i++){
				vm.percentDone += 10;
				var numArr1 = [];
				for(var j = 0; j < i*10000 ; j++){
					numArr1.push(Math.floor(Math.random() * 1000));
				}
				var numArr2 = numArr1.slice();
				var ghostbacon = graphing(bucketSort, bucketSort, numArr1, numArr2);
				theBacon[0].push(ghostbacon[0]);
				theBacon[1].push(ghostbacon[1]);
			}
			var chart = c3.generate({
	    		bindto: '#chart',
	   			data: {
	     			columns: [
	        		theBacon[0], theBacon[1]
	      			]
	    		}
	    	});
		};


	    

	};

})();