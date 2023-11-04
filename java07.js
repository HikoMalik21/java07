//task one//

const firstelement=document.querySelector("li");
console.log(firstelement);

//task two//

const heading=document.querySelector("h1");
heading.remove("h1");
const addNewelement=document.createElement("li");
addNewelement.innerText="TITAN RTX";
document.body.append(addNewelement);


//task three//

//const newHeading=document.createElement("h2");
//const headingN=document.createTextNode("GeForce 20 Series");
//newHeading.appendChild(headingN);
//newHeading.style.color="#ff6347";
//const element=document.getElementById("div1");
//element.appendChild(headingN); 


//task four//


const primary=document.getElementsByClassName("primary");
console.log(primary);


// task five//

const allElements=document.querySelectorAll(".class");
allElements.forEach((element));
{
    element.classlist.add(".class")
}





