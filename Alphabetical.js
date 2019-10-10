const names = "Daisha Pettus, Barack Obama, Beyonce Knowles, Mariah Carey, George Washington";
const splitNamesArray = names.split(", ")


const sortedNames = splitNamesArray.sort();
const ol = document.getElementById("names");

for(let i = 0; i < sortedNames.length; i++) {
   const names = sortedNames[i].split(" ")
   const li = document.createElement("li");
 li.innerHTML = "<span>" + names[0] + "</span> " + names[1];
 ol.appendChild(li);
 
}
