const getFirstSelector = function (sel) { return document.querySelector(sel); };
const nestedTarget = function() {return document.querySelector('#nested .target'); };
const increaseRankBy = function(n) {
	const nodes = document.querySelectorAll('.ranked-list');

	for (let i = 0; i < nodes.length; i++) {
		nodes[i].innerHTML = (nodes[i].innerHTML.parseInt + n).toString();
	}
};

const deepestChild = function () {
	const startNode = document.querySelector('div#grand-node')
	return runDown(startNode)[1];
};

const runDown = function (node) {
	if (node.querySelectorAll('*').length === 0) {
		return [0, node];
	}

	const nodes = node.querySelectorAll('*')
	
	const stageArr = [];
	for (let i = 0; i < nodes.length; i++) {
		const t = runDown(nodes[i]);
		stageArr.push([t[0]+1, t[1]]);
	}

	let toReturn = [];	
	for (let i = 0; i < nodes.length; i++) {
		if (i === 0){
			toReturn = stageArr[i];
		} else if (stageArr[i][0] > toReturn[0]) {
			toReturn = stageArr[i];
		} 
	}
	return toReturn;
};
