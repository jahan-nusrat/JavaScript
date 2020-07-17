/******************************************** 
*           FEET TO MILE 
********************************************/

function feetToMile (feet) {
	//check if input is less than 0
	if (feet < 0) {
		return alert('Length cannot be less than zero');
	}
	else if (typeof feet !== 'number') {
		//check if input is any other types except number
		return alert('Please provide a valid distance');
	}
	else {
		let mile = feet / 5280; //1 mile= 5280 feet
		return mile;
	}
}
console.log(feetToMile(4560));

/******************************************** 
*           WOOD CALCULATOR 
********************************************/

function woodCalculator (chair, table, bed) {
	if (
		(chair === undefined || chair === '') && //check if input is empty or undefined
		(table === undefined || table === '') &&
		(bed === undefined || bed === '')
	) {
		return alert('Empty value is not accepted');
	}
	else if (chair < 0 || table < 0 || bed < 0) {
		return alert('Chair, table and bed numbers can not be negative'); //check if input is 0 or less
	}
	else if (typeof chair !== 'number' || typeof table !== 'number' || typeof bed !== 'number') {
		//check if input is any other type other than 'number'
		return alert('Provide valid number');
	}

	let countChair = chair * 1;
	let countTable = table * 3;
	let countBed = bed * 5;
	let totalWood = countChair + countTable + countBed; //calculate total no. of chair,table and bed needed
	return totalWood;
}
console.log(woodCalculator(5, 3, 2));

/******************************************** 
*           BRICK CALCULATOR 
********************************************/

function brickCalculator (numberOfFloor) {
	let floorLevel;
	if (numberOfFloor <= 0) {
		return 'Floor numbers can not be zero or less than zero'; //check if input value is 0 or less
	}
	else if (typeof numberOfFloor !== 'number') {
		return alert('Please provide a valid floor number'); //check if input is number or not
	}
	else {
		if (numberOfFloor >= 1 && numberOfFloor <= 10) {
			floorLevel = numberOfFloor * 15; //if input is between (1-10), multiply it with 15
		}
		else if (numberOfFloor >= 11 && numberOfFloor <= 20) {
			floorLevel = (numberOfFloor - 10) * 12 + 10 * 15; //if input is between (11-20), multiply it with 12 and add previous floorLevel
		}
		else {
			floorLevel = (numberOfFloor - 20) * 10 + 10 * 15 + 10 * 12; //if input is greater than 20, multiply it with 10 and add previous two floor levels.
		}
	}
	let totalBricksNeeded = floorLevel * 1000; //total bricks calculation
	return totalBricksNeeded;
}
console.log(brickCalculator(105));

/******************************************** 
*           TINY FRIEND 
********************************************/

function tinyFriend (array) {
	let tinyName = array[0];
	if (array.length === 0) {
		//check if array is empty
		return alert('Array is empty!!!!!!');
	}
	else {
		for (let i = 0; i < array.length; i++) {
			//check if array elements are string or not
			if (typeof array[i] === 'string') {
				if (array[i].length < tinyName.length) {
					tinyName = array[i];
				}
			}
			else {
				return 'Provide a valid input name';
			}
		}
	}
	return tinyName;
}
console.log(tinyFriend([ 'adi', 'tina', 'trina', 'susan', 'joy', 'rocky', 'roy' ]));
