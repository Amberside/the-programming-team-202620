// Create the class StudentList
class StudentList{
  // Constructor
	constructor(rootId, students){
    // Set properties for the class
		this.rootId = rootId;
		this.studentList = students;
    // run the refresh method when constructor is called.
		this.refresh();
	}
    
	// generate one column on the page
	genStudentCol(fullName, initial, color, img, clip, path){
    // Create elements
    // Get the root element where all elements will added on the page
    let rootElement = document.getElementById(this.rootId);
    // Create the column
    let col = document.createElement('div');
    // Create Anchor tag
    let pathA = document.createElement('a');
    // Create card
    let card = document.createElement('div');
    let innerCard = document.createElement('div');
    let frontCard = document.createElement('div');
    let clipD = document.createElement('div');
    // Create the card content
    let content = document.createElement('div');
    let contentHeader = document.createElement('h1');
    let contentP = document.createElement('p');
    // Create the card back
    let cardBack = document.createElement('div');
    let cardBackImg = document.createElement('img');

    // Add classes & html attributes;
    col.classList.add('col-xl-3', 'col-md-4', 'col-6');
    pathA.setAttribute('href', `./team/${path}/index.html`);
    card.className = 'flip-card';
    innerCard.classList.add('flip-card-inner', `${color}`, `${clip}` );
    frontCard.className = 'flip-card-front';
    clipD.className = 'clip'
    content.className = 'content';
    cardBack.className = 'flip-card-back';
    cardBackImg.setAttribute('src', `./images/${img}`);
    cardBackImg.setAttribute('alt', `${fullName}`);
    cardBackImg.className = 'w-100';
    
    // Set Text for content
    contentHeader.textContent = `${initial}`;
    contentP.textContent = `${fullName}`;

    // Add elements to the DOM
    // Add Header and paragraph to the content
    content.appendChild(contentHeader);
    content.appendChild(contentP);
    clipD.appendChild(content);
    frontCard.appendChild(clipD);

    // Add the information to card
    cardBack.appendChild(cardBackImg);
    innerCard.appendChild(cardBack);
    innerCard.appendChild(frontCard);
    card.appendChild(innerCard);
    
    // Add anchor tag and column
    pathA.appendChild(card);
    col.appendChild(pathA);
    // Add to the root element
    rootElement.appendChild(col);
	}

	// generate all columns 
	genAllCols(){
		for(let i = 0; i < this.studentList.length; i++){
      let student = this.studentList[i];
      
      this.genStudentCol(student.fullName, student.initial, student.color, student.image, student.clip, student.path);
    }
  }

	// Remove all columns from the page
	removeElements(){
    const rootElement = document.getElementById(this.rootId);
  
    const childNodes = document.getElementsByClassName('col-6');
      
    const len = childNodes.length - 1;
    for(let i = len; i >= 0; i--){
      // Pull out the last child
      const child = childNodes[i];
      // Remove the last child from the dom.
      rootElement.removeChild(child);
    }
  }
  
  // Refresh, removes all elements and generates all elements
  refresh(){
    // Remove all elements
    this.removeElements();
    // Generate new elements
    this.genAllCols();
  }
}
    