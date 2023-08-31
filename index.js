// //add background imagery
// function background(path,width,height){
//     let backg=document.createElement('img')
//     backg.src=path
//     backg.style.position='fixed'
//     backg.style.width=width+'px'
//     backg.style.height=height+'px'
//     document.body.append(backg)
//     return backg

// for(let h=0;h<height;h++)
//   {
//   for(let w=0;w<width;w++) 
//     {
//         background('assets/sky.png',100,100)
//         background('assets/grass.png',100,100)
//     } 
//   }
// }
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

//Invoked function newImage()
newImage('assets/green-character.gif',100,100)
newImage('assets/pine-tree.png',450,200)
newImage('assets/tree.png',200,300)
newImage('assets/pillar.png',350,100)
newImage('assets/crate.png',150,200)
newImage('assets/well.png',500,425)

// //add sword image to the page
// let sword=document.createElement('img')
// sword.src='assets/sword.png'
// sword.position='fixed'
// sword.left='500px'
// sword.bottom='405px'
// document.body.append(sword)

// sword.addEventListener('click',function()
// {
//     sword.remove()
// })

//add sword ,shield and staff images to the page
// newImage('assets/sword.png', 500, 405)
// newImage('assets/shield.png',165,185)
// newImage('assets/staff.png',600,100)

//double click event listner
function newItem(path,left,bottom)
 {
    let  charactor=newImage(path,left,bottom)

    charactor.addEventListener('dblclick', () => {
        charactor.remove()
    })
}
//newItem function invoked
newItem('assets/sword.png', 500, 405)
newItem('assets/shield.png',165,185)
newItem('assets/staff.png',600,100)
