/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Taylor Swift

Find the element with the id of "name1":
	- Replace the content with the following string "Tay-Tay"*/

document.getElementById("name1").innerHTML = "Tay-Tay";

/*2. DJ Khaled

Find the element with the id of "position2":
	- Replace the content with the following string "Project Manager"
	- Change the background color to red
*/
document.getElementById("position2").innerHTML = "project Manager";
document.getElementById("position2").style.backgroundColor = "red";

/*3. Piko Taro

Find the element with the id of "alias3":
	- Replace the content with the following string "Concatenation"
	- Change the font size to 40
*/

document.getElementById("alias3").innerHTML = "Concatenation";
document.getElementById("alias3").style.fontSize = "40px";

/*4. Prince

Find the element with the class name of "profile": 
	- Replace the content with a verse from your favorite Prince song
	- Change the styles of the font-family to Sans Serif
*/

document.getElementsByClassName("profile")[0].innerHTML = '"Want some poodin pops?"';
document.getElementsByClassName("profile")[0].style.fontFamily = "Sans Serif";

/*5. Bruce Lee

Find the element with the class name of "profile":
	- Replace the content with a quote from the legend himself
*/
document.getElementsByClassName("profile")[1].innerHTML = '"Me better than Jackie Chan!"';



/*6. Samuel L Jackson

Find the element with the class name of "alias": 
	- Replace the content with your favorite character that Sammy portrayed
*/
document.getElementsByClassName("alias")[2].innerHTML = "Nick Fury";


/*7. Peter Griffin

Create a div element and give it an id of "name7":
	- Inside this div element, give it the contents of "Peter Griffin"
	- Append this div element to the element with id "nameParent"
*/
var divElement = document.createElement('div');
divElement.id = "name7";
divElement.innerHTML = "Peter Griffin";
document.getElementById("nameParent").appendChild(divElement);
/*8. Tim Duncan

Create a div element give it an id of "alias8":
	- Inside this div element, give it the contents of "Old Man Riverwalk"
	- Append this div element to the element with id "aliasParent"
*/
var divElement2 = document.createElement('div');
divElement2.id = "alias8";
divElement2.innerHTML = "Old Man Riverwalk";
document.getElementById('aliasParent').appendChild(divElement2);

//Final Boss
/*9. Without modifying the HTML file, create your own profile.*/
//name
var myName = document.createElement("div");
myName.innerHTML = "Laron Gibson";
document.getElementsByClassName('block3 col-sm-4')[2].appendChild(myName);
myName.style.textAlign = "center";

//profile pic
document.getElementsByClassName("block3 col-sm-4")[2].childNodes[0].src = "http://www.less-real.com/imagevault/uploaded/images/part7/Loli-31050.jpg";

//Role
var myRole = document.createElement("div");
myRole.innerHTML = "Coffe Boy";
document.getElementsByClassName('block3 col-sm-4')[2].appendChild(myRole);
myRole.style.textAlign = "center";

//MovieRole
var myMovieRole = document.createElement("div");
myMovieRole.innerHTML = "Loli King";
document.getElementsByClassName('block3 col-sm-4')[2].appendChild(myMovieRole);
myMovieRole.style.textAlign = "center";

//Quote
var myQuote = document.createElement("div");
myQuote.innerHTML = '"Flat Is Justice!"';
document.getElementsByClassName('block3 col-sm-4')[2].appendChild(myQuote);
myQuote.style.textAlign = "center";
