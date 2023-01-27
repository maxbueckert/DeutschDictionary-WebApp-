// MAINTAIN / STORAGE
window.addEventListener('load', () => {

    let listofMascNouns = document.getElementsByClassName('listofMascNouns')[0];
    let mascChildDivs = JSON.parse(localStorage.getItem('mascChildDivs'));
    if (mascChildDivs) {
        mascChildDivs.forEach(childDiv => {
            let newDiv = document.createElement('nounListMember');
            newDiv.className = ('nounListMember');
            newDiv.innerHTML = childDiv;
            listofMascNouns.appendChild(newDiv);
        })
    }
    let listofFemNouns = document.getElementsByClassName('listofFemNouns')[0];
    let femChildDivs = JSON.parse(localStorage.getItem('femChildDivs'));
    if (femChildDivs) {
        femChildDivs.forEach(childDiv => {
            let newDiv = document.createElement('nounListMember');
            newDiv.className = ('nounListMember');
            newDiv.innerHTML = childDiv;
            listofFemNouns.appendChild(newDiv);
        })
    }
    let listofNeutNouns = document.getElementsByClassName('listofNeutNouns')[0];
    let neutChildDivs = JSON.parse(localStorage.getItem('neutChildDivs'));
    if (neutChildDivs) {
        neutChildDivs.forEach(childDiv => {
            let newDiv = document.createElement('nounListMember');
            newDiv.className = ('nounListMember');
            newDiv.innerHTML = childDiv;
            listofNeutNouns.appendChild(newDiv);
        })
    }
});




document.addEventListener('DOMContentLoaded', () => {

    // ADD NOUN --------------------------
    let germanInput = document.getElementsByClassName('germanInputText')[0];
    let pluralInput = document.getElementsByClassName('pluralInputText')[0];
    let englishInput = document.getElementsByClassName('englishInputText')[0];
    let submitNounButton = document.getElementsByClassName('submitNounButton')[0];

    submitNounButton.addEventListener('click', () => {
        event.preventDefault();

        let listofMascNouns = document.getElementsByClassName('listofMascNouns')[0];
        let listofFemNouns = document.getElementsByClassName('listofFemNouns')[0];
        let listofNeutNouns = document.getElementsByClassName('listofNeutNouns')[0];    


        let germanNoun = germanInput.value;
        let pluralNoun = pluralInput.value;
        let englishNoun = englishInput.value;


        if (germanNoun == "die") {

        }
        
        if  (germanNoun.length < 3 ||
            (germanNoun.substring(0,4) != "der") && 
            (germanNoun.substring(0,4) != "die") && 
            (germanNoun.substring(0,4) != "das")) {
                return;
            }

        let newParentDiv = document.createElement('parent');
            newParentDiv.className = ('nounListMember');
           

        let newDivInfo = document.createElement('info');
            newDivInfo.className = ('nounInfo');
          
     

        let newDivExit = document. createElement('remove');
            newDivExit.innerHTML = " <button class= 'removeNounButton' >X</button> "
            newDivExit.className = ('removeNoun');

        newParentDiv.appendChild(newDivInfo);
        newParentDiv.appendChild(newDivExit);
            

            // logic 

            if (germanNoun.substring(0,4) == "der"){
                listofMascNouns.insertBefore(newParentDiv, listofMascNouns.firstChild);
                localStorage.setItem('mascChildDivs', JSON.stringify(Array.from(listofMascNouns.children).map(x => x.innerHTML)));
                
            }
            else if (germanNoun.substring(0,4) == "die"){
                listofFemNouns.insertBefore(newParentDiv, listofFemNouns.firstChild);
                localStorage.setItem('femChildDivs', JSON.stringify(Array.from(listofFemNouns.children).map(x => x.innerHTML)));
                
            }

            else if (germanNoun.substring(0,4) == "das") {
                listofNeutNouns.insertBefore(newParentDiv, listofNeutNouns.firstChild);
                localStorage.setItem('neutChildDivs', JSON.stringify(Array.from(listofNeutNouns.children).map(x => x.innerHTML)));
            };

        localStorage.setItem('childDivs', JSON.stringify(Array.from(listofMascNouns.children).map(x => x.innerHTML)));
    })





    // REMOVE NOUN --------------------------

        document.querySelector('.nouns').addEventListener('click', (event) => {
        let listofMascNouns = document.getElementsByClassName('listofMascNouns')[0];
        let listofFemNouns = document.getElementsByClassName('listofFemNouns')[0];
        let listofNeutNouns = document.getElementsByClassName('listofNeutNouns')[0];   
        
          if (event.target.matches('.removeNounButton')) {
            event.preventDefault();
            let parentDiv = event.target.closest('.nounListMember');
            parentDiv.remove();
            localStorage.setItem('mascChildDivs', JSON.stringify(Array.from(listofMascNouns.children).map(x => x.innerHTML)));
            localStorage.setItem('femChildDivs', JSON.stringify(Array.from(listofFemNouns.children).map(x => x.innerHTML)));
            localStorage.setItem('neutChildDivs', JSON.stringify(Array.from(listofNeutNouns.children).map(x => x.innerHTML)));
          }
        });
      });

