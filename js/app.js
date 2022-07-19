// create an array from the sections in the HTML
const sections = Array.from(document.querySelectorAll('section'));
// call the id navbar__list which is the unordered list
const ul = document.querySelector('#navbar__list');

// create a function and loop through each element in the array
function lists(){
for (let i = 0; i < sections.length; i++){
  
    // get the data set from each element in the array and also the ID
    sectionName = sections[i].getAttribute('data-nav');
    theID = sections[i].getAttribute('id');
   
    // create a list of LI element and use the anchor tag for easy scroll through the pages
    listItems = document.createElement('li');
    listItems.innerHTML = `<a class = "menu__link" id = 'scroll'> ${sectionName} </a>`;
   ul.appendChild(listItems);
  
}

}
// the lists function is then called to execution
lists();

// for the viewport, call the sections again as an array
const rect = Array.from(document.querySelectorAll("section"));

// loop through each sections
for (let rects of rect){
  const box = rects.getBoundingClientRect().top;
  console.log(box);
//   create an addEventlistener that will display active in the class when a particular section is in the viewport.
document.addEventListener('scroll', function(){
console.log(window.innerHeight);
if (rects.getBoundingClientRect().top >= -400 && rects.getBoundingClientRect().top <=150){
  const list = rects.classList;
  list.add('active');  
 

}
else {const list = rects.classList;
    list.remove('active');}
})} 

// I called the 'li' element in an Array and added classes to each li element 
const li = Array.from(document.querySelectorAll('li'));
li[0].classList.add('li1');
li[1].classList.add('li2');
li[2].classList.add('li3');
li[3].classList.add('li4');


// Using the eventlistener, when any of the Li element is clicked, 
// it scrolls to the section
const section1 =document.querySelector('#section1');
const li1 = document.querySelector('.li1');
console.log(li1);

li1.addEventListener('click', function(){
  section1.scrollIntoView ({block: 'start', behavior: 'smooth'});
});

const section2 =document.querySelector('#section2');
const li2 = document.querySelector('.li2');
console.log(li2)

li2.addEventListener('click', function(){
  section2.scrollIntoView ({block: 'start', behavior: 'smooth'});
});

const section3 =document.querySelector('#section3');
const li3 = document.querySelector('.li3');
console.log(li1);

li3.addEventListener('click', function(){
  section3.scrollIntoView ({block: 'start', behavior: 'smooth'});
});

const section4 =document.querySelector('#section4');
const li4 = document.querySelector('.li4');
console.log(li4);

li4.addEventListener('click', function(){
  section4.scrollIntoView ({block: 'start', behavior: 'smooth'});
});

// I called the section element and the li element in an Array
const rec = Array.from(document.querySelectorAll("section"));
const navi = Array.from(document.querySelectorAll('li'));
// The eventlistener listens for for scroll. 
// And when each viewport (which is represented in array) is in view,
// a class is added to list ('show'), and this class adds css attribute to
// the list, which has been called as an array

document.addEventListener('scroll', function(){

if (rec[3].getBoundingClientRect().top >= -400 && 
rec[3].getBoundingClientRect().top <=150){
navi[3].classList.add('show');
}
else {navi[3].classList.remove('show');}
}) 

const rectss = Array.from(document.querySelectorAll("section"));
const navig = Array.from(document.querySelectorAll('li'));
document.addEventListener('scroll', function(){

if (rec[2].getBoundingClientRect().top >= -400 && rec[2].getBoundingClientRect().top <=150){
  navi[2].classList.add('show');
  }
  else {navi[2].classList.remove('show');}
  }) 

  const rectsss = Array.from(document.querySelectorAll("section"));
const naviga = Array.from(document.querySelectorAll('li'));
document.addEventListener('scroll', function(){

if (rec[1].getBoundingClientRect().top >= -400 && rec[1].getBoundingClientRect().top <=150){
  navi[1].classList.add('show');
  }
  else {navi[1].classList.remove('show');}
  }) 

  const rectssss = Array.from(document.querySelectorAll("section"));
const navigat = Array.from(document.querySelectorAll('li'));
document.addEventListener('scroll', function(){

if (rec[0].getBoundingClientRect().top >= -400 && rec[0].getBoundingClientRect().top <=150){
  navi[0].classList.add('show');
  }
  else {navi[0].classList.remove('show');}
  }) 