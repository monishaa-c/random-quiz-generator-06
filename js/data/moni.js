function getRandomNumber(max){
	var randomNumber = max * Math.random();
	randomNumber = parseInt(randomNumber);
	return randomNumber;
}



function problem061(){
	var inputData = [{
		'distance': 10,
		'speed': 60
		},
		{
		'distance': 9,
		'speed': 54
		},
		{
		'distance': 5,
		'speed': 90
		},
		{
		'distance': 100,
		'speed': 74
		},
		{
		'distance': 40,
		'speed': 50
		}],
		randomIndex = getRandomNumber(inputData.length),
		distance= inputData[randomIndex]['distance'],
		speed = inputData[randomIndex]['speed'],
		time,
		question = {};

	distance=parseInt(distance);
	speed=parseInt(speed);
	time=((distance/speed)*60);

	question = {
		'type': 'single',
		'id': '061',
		'question': 'The speed of the bus is '+ speed +' m/sec if it covers a '+ distance +' kmph how much time it takes.', 
		'options': {
			'A': time - parseInt(Math.random()*10),
			'B': time,
			'C': time + parseInt(Math.random()*10),
			'D': time - parseInt(Math.random()*10)
		},
		'answer': 'B',
		'author-id': '06'
	}
	
	return question;
	
}
function problem062(){
	var inputData = [{
		'downStream': 60,
		'upStream': 55
		},
		{
		'downStream': 69,
		'upStream': 4
		},
		{
		'downStream': 25,
		'upStream': 90
		},
		{
		'downStream': 20,
		'upStream': 15
		},
		{
		'downStream': 10,
		'upStream': 30
		}],
	randomIndex = getRandomNumber(inputData.length),
		downStream= inputData[randomIndex]['downStream'],
		upStream = inputData[randomIndex]['upStream'],
		speedStream,
		question = {};
		
downStream=parseInt(downStream);
	upStream=parseInt(upStream);
	speedStream=(1/2*(downStream+upStream));

	question = {
		'type': 'single',
		'id': '062',
		'question': 'A man rows downstream at '+ downStream +' km/hr and rows upstream at '+ upStream +' km/hr. At what speed he can row in still water?',
		'options': {
			'A': speedStream,
			'B': speedStream - parseInt(Math.random()*10),
			'C': speedStream + parseInt(Math.random()*10),
			'D': speedStream - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '06'
	}
	
	return question;
	
}
function problem063(){
	var inputData = [{
		'principal': 36000,
		'interest': 6,
		'years': 6
		},
		{
		'principal': 1000,
		'interest': 140,
		'years': 70
		},
		{
		'principal': 5780,
		'interest': 650,
		'years': 390
		},
		{
		'principal': 1900,
		'interest': 660,
		'years': 10
		},
		{
		'principal': 9000,
		'interest': 450,
		'years': 590
		}],
		randomIndex = getRandomNumber(inputData.length),
		principal= inputData[randomIndex]['principal'],
		interest = inputData[randomIndex]['interest'],
		years = inputData[randomIndex]['years'],
		simpleInterest,
		question = {};
	
	principal=parseInt(principal);
	interest=parseInt(interest);
	years=parseInt(years);
	simpleInterest=(principal*interest*years)/100;

	question = {
		'type': 'single',
		'id': '063',
		'question': ' If Suresh borrows '+ principal +' from Mahesh at rate of interest '+ interest +' S.I, at the end of four years how much interest Suresh has to pay along with principal amount?',
		'options': {
			'A': simpleInterest + parseInt(Math.random()*10),
			'B': simpleInterest - parseInt(Math.random()*10),
			'C': simpleInterest,
			'D': simpleInterest - parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '06'
	}
	
	return question;
}
function problem064(){
	var inputData = [{
		'diagonal': 60
		},
		{		
		'diagonal': 90
		},
		{		
		'diagonal': 60
		},
		{
		'diagonal': 60
		},
		{		
		'diagonal': 60
		}],
		randomIndex = getRandomNumber(inputData.length),
		diagonal = inputData[randomIndex]['diagonal'],
		areaSquare,
		question = {};

	diagonal=parseInt(diagonal);
	areaSquare=1/2*(diagonal*diagonal);

	question = {
		'type': 'single',
		'id': '064',
		'question': 'The diagonal of a square field is '+ diagonal +'m,then area of the field is',
		'options': {
			'A': areaSquare - parseInt(Math.random()*10),
			'B': areaSquare - parseInt(Math.random()*10),
			'C': areaSquare + parseInt(Math.random()*10),
			'D': areaSquare
		},
		'answer': 'D',
		'author-id': '06'
	}
	
	return question;
	
}
function problem065(){
	var inputData = [{
		'salaryA': 2000,
		'salaryB': 6658,
		'salaryC': 4590,
		'salaryD': 2765,
		'salaryE': 1890,
		'average': 3579
		},
		{
		'salaryA': 6435,
		'salaryB': 6927,
		'salaryC': 6855,
		'salaryD': 7230,
		'salaryE': 6562,
		'average': 6500
		},
		{
		'salaryA': 5439,
		'salaryB': 3967,
		'salaryC': 4865,
		'salaryD': 1505,
		'salaryE': 3689,
		'average': 5432
		},
		{
		'salaryA': 9075,
		'salaryB': 7634,
		'salaryC': 5423,
		'salaryD': 9809,
		'salaryE': 4500,
		'average': 5000
		},
		{
		'salaryA': 6543,
		'salaryB': 6789,
		'salaryC': 9087,
		'salaryD': 6790,
		'salaryE': 4326,
		'average': 7000
		}],
		randomIndex = getRandomNumber(inputData.length),
		salaryA= inputData[randomIndex]['salaryA'],
		salaryB= inputData[randomIndex]['salaryB'],
		salaryC= inputData[randomIndex]['salaryC'],
		salaryD= inputData[randomIndex]['salaryD'],
		salaryE= inputData[randomIndex]['salaryE'],
		average= inputData[randomIndex]['average'],
		total= inputData[randomIndex]['total'],
		salary= inputData[randomIndex]['salary'],
		finalSalary,
		question = {};

	var total = parseInt(salaryA+salaryB+salaryC+salaryD+salaryE),
	    salary = parseInt(average*6),
	    finalSalary = parseInt(salary - total);

	question = {
		'type': 'single',
		'id': '065',
		'question': 'Mohan gets a salary of '+ salaryA +', '+salaryB+ ', '+salaryC+', '+salaryD+' and '+salaryE +' for 5 months. How much salary he must have in the sixth month so that he gets an average of '+ average +'',
		'options': {
			'A': finalSalary,
			'B': finalSalary - parseInt(Math.random()*10),
			'C': finalSalary + parseInt(Math.random()*10),
			'D': finalSalary - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '06'
	}
	
	return question;
}
function problem066(){
	
	var inputData = [{
		'initial': 36000,
		'ending': 9000,
		'years': 6
		},
		{
		'initial': 175000,
		'ending': 262500,
		'years': 10
		},
		{
		'initial': 567902,
		'ending': 289002,
		'years': 2
		},
		{
		'initial': 138900,
		'ending': 660768,
		'years': 30
		},
		{
		'initial': 119000,
		'ending': 458900,
		'years': 3
		}],
		randomIndex = getRandomNumber(inputData.length),
		initial= inputData[randomIndex]['initial'],
		ending = inputData[randomIndex]['ending'],
		years = inputData[randomIndex]['years'],
		requiredAverage,
		question = {};
	
	initial=parseInt(initial);
	ending=parseInt(ending);
	years=parseInt(years);
	increased=ending-initial;
	increasedPercentage=(increased/initial)*100;
	requiredAverage=(increasedPercentage/years);

	question = {
		'type': 'single',
		'id': '066',
		'question': ' The population of a town increased from '+ initial +' to '+ ending+' in a '+ years +'. The average percent increase of population per year is:',
		'options': {
			'A': requiredAverage + parseInt(Math.random()*10),
			'B': requiredAverage - parseInt(Math.random()*10),
			'C': requiredAverage,
			'D': requiredAverage - parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '06'
	}
	
	return question;
}
function problem067(){
	var inputData = [{
		'principal': 7500,
		'interest': 6,
		'years': 2
		},
		{
		'principal': 1000,
		'interest': 1,
		'years': 7
		},
		{
		'principal': 5540,
		'interest': 5,
		'years': 3
		},
		{
		'principal': 1900,
		'interest': 8,
		'years': 5
		},
		{
		'principal': 9340,
		'interest': 3,
		'years': 2
		}],
		randomIndex = getRandomNumber(inputData.length),
		principal= inputData[randomIndex]['principal'],
		interest = inputData[randomIndex]['interest'],
		years = inputData[randomIndex]['years'],
		amount,
		question = {};
	
	principal=parseInt(principal);
	interest=parseInt(interest);
	years=parseInt(years);
	amount=parseFloat(principal*(1+(interest/100))**years);

	question = {
		'type': 'single',
		'id': '067',
		'question': ' What is the amount for a sum of money '+ principal +' at '+ interest +' rate of interest C.I. for '+ years +' years?',
		'options': {
			'A': amount + parseInt(Math.random()*10),
			'B': amount - parseInt(Math.random()*10),
			'C': amount,
			'D': amount - parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '06'
	}
	
	return question;
}
function problem068(){
	var inputData = [{
		'sellingPrice': 8634,
		'gainPercentage': 5
		},
		{
		'sellingPrice': 7621,
		'gainPercentage': 9
		},
		{
		'sellingPrice': 8400,
		'gainPercentage': 12
		},
		{
		'sellingPrice': 6500,
		'gainPercentage': 6
		},
		{
		'sellingPrice': 4320,
		'gainPercentage': 3
		}],
	randomIndex = getRandomNumber(inputData.length),
		sellingPrice= inputData[randomIndex]['sellingPrice'],
		gainPercentage = inputData[randomIndex]['gainPercentage'],
		costPrice,
		question = {};
		
sellingPrice=parseInt(sellingPrice);
	gainPercentage=parseInt(gainPercentage);
	costPrice=(100/(100+gainPercentage))*sellingPrice;

	question = {
		'type': 'single',
		'id': '068',
		'question': 'Suresh bought a cell phone from a shop. If he sells it at '+ sellingPrice +' to Mahesh and earns a profit of '+ gainPercentage +', find the price at which Suresh bought the cell phone.?',
		'options': {
			'A': costPrice,
			'B': costPrice - parseInt(Math.random()*10),
			'C': costPrice + parseInt(Math.random()*10),
			'D': costPrice - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '06'
	}
	
	return question;
	
}
function problem069(){
	var inputData = [{
		'distance1': 360,
		'time1': 6,
		'time2': 2
		},
		{
		'distance1': 100,
		'time1': 14,
		'time2': 4
		},
		{
		'distance1': 16,
		'time1': 2,
		'time2': 4
		},
		{
		'distance1': 1900,
		'time1': 5,
		'time2': 15
		},
		{
		'distance1': 90,
		'time1': 3,
		'time2': 5
		}],
		randomIndex = getRandomNumber(inputData.length),
		distance1= inputData[randomIndex]['distance1'],
		time1 = inputData[randomIndex]['time1'],
		time2 = inputData[randomIndex]['time2'],
		speedStream,
		question = {};
	
	distance1=parseInt(distance1);
	time1=parseInt(time1);
	time2=parseInt(time2);
	ds= parseInt(distance1/time1);
	us = parseInt(distance1/time2);
	speedStream=1/2*(ds-us);

	question = {
		'type': 'single',
		'id': '069',
		'question': ' A boat running downstream covers a distance of '+ distance1 +' km in '+ time1 +' hours while for covering the same distance upstream, it takes '+ time2 +' hours. What is the speed of the boat in still water?',
		'options': {
			'A': speedStream + parseInt(Math.random()*10),
			'B': speedStream - parseInt(Math.random()*10),
			'C': speedStream,
			'D': speedStream - parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '06'
	}
	
	return question;
}
function problem0610(){
	var inputData = [{
		'simpleInterest': 5000,
		'principal': 1650,
		'rate': 20
		},
		{
		'simpleInterest': 1800,
		'principal': 6000,
		'rate': 10
		},
		{
		'simpleInterest': 1600,
		'principal': 1200,
		'rate': 4
		},
		{
		'simpleInterest': 1900,
		'principal': 1450,
		'rate': 5
		},
		{
		'simpleInterest': 9000,
		'principal': 3500,
		'rate': 15
		}],
		randomIndex = getRandomNumber(inputData.length),
		simpleInterest= inputData[randomIndex]['simpleInterest'],
		principal = inputData[randomIndex]['principal'],
		rate = inputData[randomIndex]['rate'],
		years,
		question = {};
	
	simpleInterest=parseInt(simpleInterest);
	principal=parseInt(principal);
	rate=parseInt(rate);
	years= (simpleInterest*100)/(principal*rate);

	question = {
		'type': 'single',
		'id': '0610',
		'question': ' In how many years the simple interest on '+ principal +' at '+ rate +' rate of interest s.I will become '+ simpleInterest+'',
		'options': {
			'A': years + parseInt(Math.random()*10),
			'B': years - parseInt(Math.random()*10),
			'C': years,
			'D': years - parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '06'
	}
	
	return question;
}
function problem0611(){
	var inputData = [{
		'area': 10,		
		},
		{
		'area': 780,
		},
		{
		'area': 100,	
		},
		{
		'area': 610,		
		},
		{
		'area': 950,	
		}],
		randomIndex = getRandomNumber(inputData.length),
		area= inputData[randomIndex]['area'],
		areaSquare,
		question = {};

	area=parseInt(area);
	areaSquare=area*area;

	question = {
		'type': 'single',
		'id': '0611',
		'question': 'What is the area of square field whose side is '+ area+'m ?',
		'options': {
			'A':areaSquare - parseInt(Math.random()*10),
			'B': areaSquare - parseInt(Math.random()*10),
			'C': areaSquare + parseInt(Math.random()*10),
			'D':  areaSquare
		},
		'answer': 'D',
		'author-id': '06'
	}
	
	return question;
	
}
function problem0612(){
	var inputData = [{
		'costPrice': 8500,
		'gainPercentage': 50
		},
		{
		'costPrice': 1540,
		'gainPercentage': 25
		},
		{
		'costPrice': 5600,
		'gainPercentage': 120
		},
		{
		'costPrice': 6500,
		'gainPercentage': 68
		},
		{
		'costPrice': 4320,
		'gainPercentage': 36
		}],
	randomIndex = getRandomNumber(inputData.length),
		costPrice= inputData[randomIndex]['costPrice'],
		gainPercentage = inputData[randomIndex]['gainPercentage'],
		sellingPrice,
		question = {};
		
    costPrice=parseInt(costPrice);
	gainPercentage=parseInt(gainPercentage);
	sellingPrice=((100+gainPercentage)/100)*costPrice;

	question = {
		'type': 'single',
		'id': '0612',
		'question': 'Ramesh bought a chair for '+ costPrice +' and sold it to Suresh. If Ramesh earned a profit of '+ gainPercentage+'%, find the selling price of chair.',
		'options': {
			'A': sellingPrice,
			'B': sellingPrice - parseInt(Math.random()*10),
			'C': sellingPrice + parseInt(Math.random()*10),
			'D': sellingPrice - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '06'
	}
	
	return question;
	
}
function problem0613(){
	var inputData = [{
		'perimeter': 34		
		},
		{
		'perimeter': 78,
		},
		{
		'perimeter': 89,	
		},
		{
		'perimeter': 61,		
		},
		{
		'perimeter': 24,	
		}],
		randomIndex = getRandomNumber(inputData.length),
		perimeter= inputData[randomIndex]['perimeter'],
		side,
		question = {};

	perimeter=parseInt(perimeter);
	side=perimeter/4;

	question = {
		'type': 'single',
		'id': '0613',
		'question': 'If the perimeter of square is ' + perimeter+', find one of the side of square?',
		'options': {
			'A':side - parseInt(Math.random()*10),
			'B': side - parseInt(Math.random()*10),
			'C': side + parseInt(Math.random()*10),
			'D':  side
		},
		'answer': 'D',
		'author-id': '06'
	}
	
	return question;
	
}
function problem0614(){
	var inputData = [{
		'value': 1.5625		
		},
		{
		'value': 841,
		},
		{
		'value': 529,	
		},
		{
		'value': 144,		
		},
		{
		'value': 400,	
		}],
		randomIndex = getRandomNumber(inputData.length),
		value= inputData[randomIndex]['value'],
		squareRoot,
		question = {};

	value=parseInt(value);
	squareRoot=Math.sqrt(value);

	question = {
		'type': 'single',
		'id': '0614',
		'question': 'Find the square root value of '+ value+'? ',
		'options': {
			'A':squareRoot - parseInt(Math.random()*10),
			'B': squareRoot - parseInt(Math.random()*10),
			'C': squareRoot + parseInt(Math.random()*10),
			'D':  squareRoot
		},
		'answer': 'D',
		'author-id': '06'
	}
	
	return question;
	
}
function problem0615(){
	var inputData = [{
		'base': 8500,
		'height': 50
		},
		{
		'base': 1540,
		'height': 25
		},
		{
		'base': 5600,
		'height': 120
		},
		{
		'base': 6500,
		'height': 60
		},
		{
		'base': 4320,
		'height': 36
		}],
	randomIndex = getRandomNumber(inputData.length),
		base= inputData[randomIndex]['base'],
		height = inputData[randomIndex]['height'],
		areaTriangle,
		question = {};
		
    base=parseInt(base);
	height=parseInt(height);
	areaTriangle=1/2*(base*height);

	question = {
		'type': 'single',
		'id': '0615',
		'question': 'What is the area of triangle with base '+ base +'m and '+ height +'m ?',
		'options': {
			'A': areaTriangle,
			'B': areaTriangle - parseInt(Math.random()*10),
			'C': areaTriangle + parseInt(Math.random()*10),
			'D': areaTriangle - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '06'
	}
	
	return question;
	
}
function problem0616(){
	var inputData = [{
		'value': 79507		
		},
		{
		'value': 9261,
		},
		{
		'value': 2744,	
		},
		{
		'value': 5832,		
		},
		{
		'value': 729,	
		}],
		randomIndex = getRandomNumber(inputData.length),
		value= inputData[randomIndex]['value'],
		cubeRoot,
		question = {};

	value=parseInt(value);
	cubeRoot=Math.cbrt(value);

	question = {
		'type': 'single',
		'id': '0616',
		'question': 'Find the cube root value of '+ value+'? ',
		'options': {
			'A':cubeRoot - parseInt(Math.random()*10),
			'B': cubeRoot - parseInt(Math.random()*10),
			'C': cubeRoot + parseInt(Math.random()*10),
			'D':  cubeRoot
		},
		'answer': 'D',
		'author-id': '06'
	}
	
	return question;
	
}
function problem0617(){
	var inputData = [{
		'distance': 600,
		'time': 5
		},
		{
		'distance': 90,
		'time': 4
		},
		{
		'distance': 45,
		'time': 9
		},
		{
		'distance': 100,
		'time': 5
		},
		{
		'distance': 40,
		'time': 5
		}],
		randomIndex = getRandomNumber(inputData.length),
		distance= inputData[randomIndex]['distance'],
		time = inputData[randomIndex]['time'],
		speed,
		question = {};

	distance=parseInt(distance);
	time=parseInt(time);
	speed=(distance/(time*60)*(18/5));

	question = {
		'type': 'single',
		'id': '0617',
		'question': 'A person crosses a '+ distance+' m long street in '+ time+' minutes. What is speed in km per hour?', 
		'options': {
			'A': speed - parseInt(Math.random()*10),
			'B': speed,
			'C': speed + parseInt(Math.random()*10),
			'D': speed - parseInt(Math.random()*10)
		},
		'answer': 'B',
		'author-id': '06'
	}
	
	return question;
	
}
function problem0618(){
	var inputData = [{
		'sellingPrice': 2500,
		'costPrice': 200
		},
		{
		'sellingPrice': 3500,
		'costPrice': 300
		},
		{
		'sellingPrice': 4500,
		'costPrice': 400
		},
		{
		'sellingPrice': 1500,
		'costPrice': 100
		},
		{
		'sellingPrice': 5500,
		'costPrice': 500
		}],
		randomIndex = getRandomNumber(inputData.length),
		sellingPrice= inputData[randomIndex]['sellingPrice'],
		costPrice = inputData[randomIndex]['costPrice'],
		profit = inputData[randomIndex]['profit'],
		profitPercentage,
		question = {};

	sellingPrice=parseInt(sellingPrice);
	costPrice=parseInt(costPrice);
	profit= sellingPrice-costPrice;
	profitPercentage=(profit/costPrice)*100;

	question = {
		'type': 'single',
		'id': '0618',
		'question': 'A shopkeeper sold an article for rs. '+ sellingPrice+'. If costPrice of article is '+ costPrice +'. Find the profit percentage?', 
		'options': {
			'A': profitPercentage - parseInt(Math.random()*10),
			'B': profitPercentage,
			'C': profitPercentage + parseInt(Math.random()*10),
			'D': profitPercentage - parseInt(Math.random()*10)
		},
		'answer': 'B',
		'author-id': '06'
	}
	
	return question;
	
}
function problem0619(){
	var inputData = [{
		'lossPercentage': 20,
		'costPrice': 4000
		},
		{
		'lossPercentage': 10,
		'costPrice': 8000
		},
		{
		'lossPercentage': 5,
		'costPrice': 3000
		},
		{
		'lossPercentage': 10,
		'costPrice': 5000
		},
		{
		'lossPercentage': 12,
		'costPrice': 9800
		}],
		randomIndex = getRandomNumber(inputData.length),
		lossPercentage= inputData[randomIndex]['lossPercentage'],
		costPrice = inputData[randomIndex]['costPrice'],
		sellingPrice,
		question = {};

	lossPercentage=parseInt(lossPercentage);
	costPrice=parseInt(costPrice);
	sellingPrice=((100-lossPercentage)/100)*costPrice;

	question = {
		'type': 'single',
		'id': '0619',
		'question': 'A man purchase a TV for Rs. '+ costPrice+' and sells it at '+lossPercentage+'. What is the sellingPrice of Tv?', 
		'options': {
			'A': sellingPrice - parseInt(Math.random()*10),
			'B': sellingPrice + parseInt(Math.random()*10),
			'C': sellingPrice,
			'D': sellingPrice - parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '06'
	}
	
	return question;
	
}
function problem0620(){
	var inputData = [{
		'lossPercentage': 25,
		'sellingPrice': 4200
		},
		{
		'lossPercentage': 10,
		'sellingPrice': 3400
		},
		{
		'lossPercentage': 5,
		'sellingPrice': 3500
		},
		{
		'lossPercentage': 10,
		'sellingPrice': 5050
		},
		{
		'lossPercentage': 12,
		'sellingPrice': 4300
		}],
		randomIndex = getRandomNumber(inputData.length),
		lossPercentage= inputData[randomIndex]['lossPercentage'],
		sellingPrice = inputData[randomIndex]['sellingPrice'],
		costPrice,
		question = {};

	lossPercentage=parseInt(lossPercentage);
	sellingPrice=parseInt(sellingPrice);
    costPrice=(100/(100-lossPercentage))*sellingPrice;

	question = {
		'type': 'single',
		'id': '0620',
		'question': 'A shopkeeper purchases a table and sells it for '+ sellingPrice+'. If he incur a loss of '+ lossPercentage+'. Find the costPriceof table.',  
		'options': {
			'A': costPrice - parseInt(Math.random()*10),
			'B': costPrice + parseInt(Math.random()*10),
			'C': costPrice,
			'D': costPrice - parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '06'
	}
	
	return question;
	
}