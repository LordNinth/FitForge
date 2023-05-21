//search variables
const exerciseInput = document.querySelector(".exerciseInput");
const recipeInput = document.querySelector(".recipeInput")
const exBtn = document.querySelector(".exSearch")
const recipeBtn = document.querySelector(".recipeSearch")
// const apiUrl = 'https://exerciseapi3.p.rapidapi.com/search/?primaryMuscle=${params}'

//exercise api
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f949d10bd8mshf91fea6233b3069p123fb3jsn202554e50322',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};

//recipe api
const options1 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f949d10bd8mshf91fea6233b3069p123fb3jsn202554e50322',
		'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
	}
	

};
// //call exercise
async function checkEx(body) {
	const response = await fetch(`https://exercisedb.p.rapidapi.com/exercises/target/${body}`, options);
	const data = await response.json();
	console.log(data);

	//ex1
	document.querySelector(".exName").innerHTML = data[0].name;
	// document.querySelector(".exTarget").innerHTML = data[0].target
	// document.querySelector(".exEquipment").innerHTML = data[0].equipment;
	// document.querySelector(".exUrl").innerHTML = data[0].gifUrl;

	//ex2
	document.querySelector(".exName1").innerHTML = data[1].name;
	// document.querySelector(".exTarget1").innerHTML = data[1].target
	// document.querySelector(".exEquipment1").innerHTML = data[1].equipment;
	// document.querySelector(".exUrl1").innerHTML = data[1].gifUrl;

	//ex3
	document.querySelector(".exName2").innerHTML = data[2].name;
	// document.querySelector(".exTarget2").innerHTML = data[2].target
	// document.querySelector(".exEquipment2").innerHTML = data[2].equipment;
	// document.querySelector(".exUrl2").innerHTML = data[2].gifUrl;
	
	//NOTE: Dont uncomment these, free subcription only lets you call so many times before hitting daily limit!!!!!!!!!!!!!!!!!
	
}

//call function
exBtn.addEventListener('click', ()=> {
	checkEx(exerciseInput.value);
})



//call recipe
async function checkRecipe(params) {
	const response = await fetch(`https://edamam-recipe-search.p.rapidapi.com/search?q=${params}`, options1); 
	const data1 = await response.json();
	console.log(data1);
	// recipe1
	document.querySelector(".recipeName").innerHTML = data1.hits[0].recipe.label;
	// document.querySelector(".cuisineType").innerHTML = data1.hits[0].recipe.cuisineType;
	// document.querySelector(".calories").innerHTML = data1.hits[0].recipe.calories;
	// document.querySelector(".recipeUrl").innerHTML = data1.hits[0].recipe.url;


	// recipe2
	document.querySelector(".recipeName1").innerHTML = data1.hits[1].recipe.label;
	// document.querySelector(".cuisineType1").innerHTML = data1.hits[1].recipe.cuisineType;
	// document.querySelector(".calories1").innerHTML = data1.hits[1].recipe.calories;
	// document.querySelector(".recipeUrl1").innerHTML = data1.hits[1].recipe.url;

	// recipe3
	document.querySelector(".recipeName2").innerHTML = data1.hits[2].recipe.label;
	// document.querySelector(".cuisineType2").innerHTML = data1.hits[2].recipe.cuisineType;
	// document.querySelector(".calories2").innerHTML = data1.hits[2].recipe.calories;
	// document.querySelector(".recipeUrl2").innerHTML = data1.hits[2].recipe.url;

}



recipeBtn.addEventListener('click', ()=> {
	checkRecipe(recipeInput.value);

})





//exercise api
// const url = 'https://exerciseapi3.p.rapidapi.com/search/?primaryMuscle=pectoralis%20major';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'f949d10bd8mshf91fea6233b3069p123fb3jsn202554e50322',
// 		'X-RapidAPI-Host': 'exerciseapi3.p.rapidapi.com'
// 	}
// };





























































 //ROSH NOTE: DONT TOUCH THIS, THIS IS ANOTHER EXERCISE API BUT DAILY LIMIT EXPIRED.
// const url = 'https://exerciseapi3.p.rapidapi.com/search/?primaryMuscle=pectoralis%20major';
// const options = {
	// 	method: 'GET',
	// 	headers: {
		// 		'X-RapidAPI-Key': 'f949d10bd8mshf91fea6233b3069p123fb3jsn202554e50322',
		// 		'X-RapidAPI-Host': 'exerciseapi3.p.rapidapi.com'
		// 	}
		// };
		
		
		
		// fetch(`https://exerciseapi3.p.rapidapi.com/search/?primaryMuscle=${params}`, options)
		// 		.then(response => response.json())
		// 		.then(response =>  console.log(response))
		// 		.then(response =>  {
		// 			console.log(response[0].Force)
		// 		})
		
		
		
		// })
		