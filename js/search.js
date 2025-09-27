

const search= document.getElementById("searchbtn");


const loadCountry = ()=>{
    const country= document.getElementById("input").value;

  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
    //   console.log(data); 
      displayCountry(data.meals);
    })
    .catch((error) => console.log(error));

};




const displayCountry = (meals)=>{
    //  container.innerHTML = "";
    console.log("displayhoccenh",meals);
     const container = document.getElementById("container"); 
     container.innerHTML = ""
   

    meals.forEach((meal) => {
        const card = document.createElement("div");
        card.innerHTML = `
        <div class="mx-4 rounded-sm border-solid border-2 border-gray-100 shadow-lg">
        <div><img class="rounded" src="${meal.strMealThumb}"/></div>
        <div><h2 class="text-xl p-4 font-bold text-center">${meal.strMeal}</h2></div>
        
        </div>
        `;
        container.appendChild(card);
    });
}

search.addEventListener("click",loadCountry);