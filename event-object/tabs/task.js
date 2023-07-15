const tabs = Array.from(document.getElementsByClassName('tab'));
const tabsContent = Array.from(document.getElementsByClassName('tab__content'));
console.log(tabs)
for (let i = 0; i < tabs.length; i++){
    tabs[i].addEventListener('click', () => {
        tabs.forEach((i) => i.classList.remove('tab_active'))
        tabs[i].classList.add('tab_active')
        tabsContent.forEach((i) => i.classList.remove('tab__content_active'))
        tabsContent[i].classList.add('tab__content_active')
    })
}
