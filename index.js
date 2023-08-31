//declaration of a funtion to display charactors
function newImage(path,left,bottom){
    let charactor=document.createElement('img')
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


//add a tree image to the page
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

//add sward iamge to the page
let sword=document.createElement('img')
sword.src='assets/sword.png'
sword.position='fixed'
sword.left='500px'
sword.bottom='405px'
document.body.append(sword)

sword.addEventListener('click',function()
{
    sword.remove()
})

//add shield and staff images to the page
newItem('assets/shield.png',165,185)
newItem('assets/staff.png',600,100)