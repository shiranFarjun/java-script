const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));

function handleTabClick(event) {
    tabPanels.forEach(panel => {                                      // hide all tab panels
        panel.hidden = true;
    });
    tabButtons.forEach(tab => {                                       // mark all tabs as unselected
        tab.setAttribute('aria-selected', false);                     // tab.ariaSelected = false;
    });
    event.currentTarget.setAttribute('aria-selected', true);         // mark the clicked tab as selected
    const { id } = event.currentTarget;                              // find the associated tabPanel and show it!

    // Option 1
    // const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
    // console.log(tabPanel);
    // tabPanel.hidden = false;
   
    // Option 2 - find in the array of tabPanels
    console.log(tabPanels);
    const tabPanel = tabPanels.find(
        panel => panel.getAttribute('aria-labelledby') === id
    );
    tabPanel.hidden = false;
}

