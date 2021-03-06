/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

/*
	Your goal in this kata is to implement an difference function, which subtracts
	one list from another. It should remove all values from list a, which are
	present in list b. If a value is present in b, all of its occurrences must be
	removed from the other:
	array_diff([1,2],[1]) == [2]
	array_diff([1,2,2,2,3],[2]) == [1,3]
*/

function array_diff(a, b) {
	return a.filter(function(presentNums) {
		return presentNums !== b[0];
	});
}
