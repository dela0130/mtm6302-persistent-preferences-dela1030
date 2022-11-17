const listitems = [
    {item:'Temperance', description:'Eat not to dullness; drink not to elevation.'},
    {item:'Silence', description:'Speak not but what may benefit others or yourself; avoid trifling conversation.'},
    {item:'Order', description:'Let all your things have their places; let each part of your business have its time.'},
    {item:'Resolution', description:'Resolve to perform what you ought; perform without fail what you resolve.'},
    {item:'Frugality', description:'Make no expense but to do good to others or yourself; i.e., waste nothing.'},
    {item:'Industry', description:"Lose no time; be always employ'd in something useful; cut off all unnecessary actions."},
    {item:'Sincerity', description:'Use no hurtful deceit; think innocently and justly, and, if you speak, speak accordingly.'},
    {item:'Justice', description:'Wrong none by doing injuries, or omitting the benefits that are your duty.'},
    {item:'Moderation', description:'Avoid extremes; forbear resenting injuries so much as you think they deserve.'},
    {item:'Cleanliness', description:'Tolerate no uncleanliness in body, cloaths, or habitation.'},
    {item:'Tranquillity', description:'Be not disturbed at trifles, or at accidents common or unavoidable.'},
    {item:'Chastity', description:"Rarely use venery but for health or offspring, never to dullness, weakness, or the injury of your own or another's peace or reputation."},
    {item:'Humility', description:'Imitate Jesus and Socrates.'}
]

const $list = document.getElementById('list')
const listhtml = []
const $main = document.getElementsByName('list-main')
const $listStyles = document.getElementById('list-styles')
const $themeStyles = document.getElementById('theme-styles')
const $body = document.body
const $pref = document.getElementById('pref')
const $source = document.getElementById('source')
const selectBoxes = document.querySelectorAll('select')

let theme = {
    primary: '#A7DADC',
    secondary: '#C5F0FB',
    accent: '#E8E9ED',
    fontColor: '#161314'
}

let format = {
    scale: 'scale(1)',
    fontSize: '25px'
}

function setFormat () {
    for (const listItem of $list.children) {
        listItem.style.fontSize = format.fontSize
        listItem.style.tranform = format.scale
    }
}



function setStyle () {
    $body.style.backgroundColor = theme.secondary
    $body.style.color = theme.fontColor
    $pref.style.backgroundColor = theme.primary
    $source.style.color = theme.fontColor

    /* When I tried to directly target the li's that were dynamically added, they were not seen by javascript. So after reading the article below, I realized I would need to use an element that was already there in the DOM before the page loaded. So I tried targetting the children of the ul, and it worked!!

    https://medium.com/littlemanco/handling-dynamically-created-html-in-javascript-2746e02cc063
    */

    for (const listItem of $list.children) {
            listItem.style.backgroundColor = theme.primary
            listItem.style.color = theme.fontColor
            listItem.style.border = 'solid 1px' + theme.fontColor
            listItem.style.boxShadow = '10px 10px 1px' + theme.primary

                for (toolTip of listItem.children) {
                    toolTip.style.backgroundColor = theme.accent
                    toolTip.style.color = theme.fontColor
                    toolTip.style.border = '1px solid' + theme.fontColor
                    toolTip.style.boxShadow = '10px 10px 1px' + theme.primary
                   
                }           
    }

    for (const selectBox of selectBoxes){
        selectBox.style.backgroundColor = theme.accent
        selectBox.style.color = theme.fontColor
    }

}

for (const listitem of listitems) {

    listhtml.push(`
        <li class="tooltip"> ${listitem.item} <span class="tooltiptext">${listitem.description}</span></li>
    `)
 
}

$list.innerHTML = listhtml.join('')

$themeStyles.addEventListener('change', function(e){
    e.preventDefault()
    if ($themeStyles.selectedIndex === 0) {
        theme = {
            primary: '#A7DADC',
            secondary: '#C5F0FB',
            accent: '#E8E9ED',
            fontColor: '#161314'
        }
    }
    if ($themeStyles.selectedIndex === 1) {
        theme = {
            primary: '#150811',
            secondary: '#380036',
            accent: '#056464',
            fontColor: '#EBFBFF'
        }
    }

    if ($themeStyles.selectedIndex === 2) {
        theme = {
            primary: '#002868',
            secondary: '#BF0A30',
            accent: '#BF0A30',
            fontColor: '#fff'
        }
    }

    localStorage.setItem('themeDropdown', $themeStyles.selectedIndex)
    localStorage.setItem('themeStyle', JSON.stringify(theme))

    setStyle()

})

$listStyles.addEventListener('change', function(e){
    e.preventDefault(e)
    if ($listStyles.selectedIndex === 0) {
        format = {
            scale: 'scale(1)',
            fontSize: '25px'
        }
    }

    if ($listStyles.selectedIndex === 1) {
        format = {
            scale: 'scale(.9)',
            fontSize: '18px'
        }
    }

    if ($listStyles.selectedIndex === 2) {
        format = {
    scale: 'scale(1.1)',
            fontSize: '30px'
        }
    }

    localStorage.setItem('formatDropdown', $listStyles.selectedIndex)
    localStorage.setItem('formatStyle', JSON.stringify(format))

    setFormat()

})

const ls = localStorage.getItem('themeDropdown')
const ls2 = JSON.parse(localStorage.getItem('themeStyle'))
const ls3 = localStorage.getItem('formatDropdown')
const ls4 = JSON.parse(localStorage.getItem('formatStyle'))

if (ls) {
    $themeStyles.selectedIndex = ls
}

if (ls2) {
    theme = ls2
}

if (ls3) {
    $listStyles.selectedIndex = ls3
}

if (ls4) {
    format = ls4
}

setStyle()
setFormat()


    