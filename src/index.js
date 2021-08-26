const listContainer = document.querySelector('[data-lists]');

let lists = ['name', 'todo'];

function render() {
    clearElements(listsContainer)
    lists.forEach(list => {
        const listElement = document.createElement('li');
    })
}