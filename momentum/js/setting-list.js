const settingList = () => {
  const settingContainer = document.querySelector('.setting-container'),
  settingBtn = settingContainer.querySelector('.setting-icons'),
  settingContent = settingContainer.querySelector('.setting-content'),
  settingContentBackground = settingContainer.querySelector('.setting-container-background'),
  languageItem = settingContainer.querySelector('.language'),
  languageList = settingContainer.querySelector('.language_list'),
  backgroundItem = settingContainer.querySelector('.background'),
  backgroundList = settingContainer.querySelector('.background-list');


settingBtn.addEventListener('click', () => {
  settingContent.style.opacity = "1"  
  settingContentBackground.style.display = "block";
})

settingContentBackground.addEventListener('click', (evt) => {
  if (evt.target == settingContentBackground){
    settingContent.style.opacity = "0"
    settingContentBackground.style.display = "none";
  }
})


languageItem.addEventListener('click', () => {
  backgroundList.style.display = 'none';
  languageList.style.display = "block";
})


backgroundItem.addEventListener('click', () => {
  console.log(languageList)
  languageList.style.display = "none";
  backgroundList.style.display = 'block';
  
})
}
export {settingList}