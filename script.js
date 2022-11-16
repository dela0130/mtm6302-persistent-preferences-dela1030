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
const $htmlElement = document.documentElement

for (const listitem of listitems) {
    /*
    For some reason, I can't style tooltips using this method. Maybe b/c the classes are loaded in dynamically?. See setStyle().
    listhtml.push(`
        <li class="listitem tooltip"> ${listitem.item} <span class="tooltiptext">${listitem.description}</span></li>
    `)*/
    listhtml.push(`
        <li class="listitem tooltip"> ${listitem.item}</li>
    `)
}

$list.innerHTML = listhtml.join('')

$themeStyles.addEventListener('change', function(){
    $htmlElement.classList 

})

const theme = {
    primary: '#A7DADC',
    secondary: '#C5F0FB',
    accent: '#E8E9ED',
    fontColor: '#161314'
}

const listNormal = {
    height: '100px',
    fontSize: '25px'
}


const $body = document.body
const $pref = document.getElementById('pref')
const $source = document.getElementById('source')
const listItems = document.querySelectorAll('li')
const selectBoxes = document.querySelectorAll('select')
const toolTips = document.querySelectorAll('tooltiptext')

function setStyle () {
    $body.style.backgroundColor = theme.secondary
    $body.style.color = theme.fontColor
    $pref.style.backgroundColor = theme.primary
    $source.style.color = theme.fontColor

    for (const listItem of listItems) {
        listItem.style.backgroundColor = theme.primary
        listItem.style.color = theme.fontColor
        listItem.style.borderColor - theme.fontColor
        listItem.style.boxShadow = '10px 10px 1px' + theme.primary
    }

    for (const selectBox of selectBoxes){
        selectBox.style.backgroundColor = theme.accent
        selectBox.style.color = theme.fontColor
    }
    /*
    This for some reason doesn't work.
    for (const toolTip of toolTips) {
        toolTip.style.backgroundColor = theme.accent
        toolTip.style.color = theme.fontColor
        toolTip.style.borderColor = theme.fontColor
        toolTip.style.boxShadow = '10px 10px 1px' + theme.primary
    }
    */
}

setStyle()