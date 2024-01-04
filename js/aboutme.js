const tabLinks = document.getElementsByClassName('tab-links');
const tabContents = document.getElementsByClassName('tab-contents');

opentab = (tabName) => {
    for (tabLink of tabLinks) {
        tabLink.classList.remove('active-link');
    }

    for (tabContent of tabContents) {
        if (tabContent.id === tabName && !tabContent.classList.contains('active-tab')) {
            tabContent.classList.add('active-tab');
        } else {
            tabContent.classList.remove('active-tab');
        }
    }

    const clickedTabLink = document.querySelector(`.tab-links[data-tab=${tabName}]`);
    clickedTabLink.classList.add('active-link');
}

