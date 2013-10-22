'use strict';

var testingGrunt = 'This is grunt testing';

console.log(testingGrunt);

$('#open-author-area').on('click', function() {
	console.log('click');
	$('body').toggleClass('menu-open');
});

$('code').addClass('prettyprint');