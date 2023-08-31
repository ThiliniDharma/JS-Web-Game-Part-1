//declaration of a funtion to display charactors
function newImage(path,left,bottom){
    let charactor=document.createElement('imgage')
    charactor.src=path
    charactor.style.position='fixed'
    charactor.style.left=left+'px'
    charactor.style.bottom=bottom+'px'
    document.body.append(charactor)
    return charactor
}

// add little guy image to the page
// let greenCharacter = document.createElement('img')
// greenCharacter.src = 'assets/green-character.gif'
// greenCharacter.style.position = 'fixed'
// greenCharacter.style.left = '100px'
// greenCharacter.style.bottom = '100px'
// document.body.append(greenCharacter)
// //add a tree image to the page
// let Pinetree = document.createElement('img')
// Pinetree.src = 'assets/pine-tree.png'
// Pinetree.style.position = 'fixed'
// Pinetree.style.left = '450px'
// Pinetree.style.bottom = '200px'
// document.body.append(Pinetree)

//calling funtion newImage()
newImage('assets/green-character.gif',100,100)
newImage('assets/pine-tree.png',450,200)
newImage('assets/tree.png',200,300)
newImage('assets/pillar.png',350,100)
newImage('assets/crate.png',150,200)
newImage('assets/well.png',500,425)
