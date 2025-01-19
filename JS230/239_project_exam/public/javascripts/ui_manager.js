export class UIManager {
  constructor() {
    this.templates = {};
    this.registerTemplates();
  }

  registerTemplates() {
    document.querySelectorAll("script[type='text/x-handlebars']").forEach(tmpl => {
      this.templates[tmpl["id"]] = Handlebars.compile(tmpl["innerHTML"]);
    });

    document.querySelectorAll('[data-type=partial]').forEach(tmpl => {
      Handlebars.registerPartial(tmpl["id"], tmpl["innerHTML"]);
    });
  }

  renderMainTemplate(templateData) {
    document.querySelector('body').insertAdjacentHTML('beforeend', this.templates.main_template(templateData));
    document.getElementById('all_header').classList.add('active');
  }

  updateTitleUI(templateData) {
    const headerContainer = document.querySelector('#items').firstElementChild;
    headerContainer.innerHTML = this.templates.title_template(templateData);
  }

  updateItemsUI(templateData) {
    const listContainer = document.querySelector('tbody');
    listContainer.innerHTML = this.templates.list_template(templateData);
  }

  updateSideBarUI(isCompletedGroup, templateData) {
    const activeElement = document.querySelector('.active');
    const activeTitle = activeElement?.getAttribute('data-title');

    const allTodosContainer = document.querySelector('#all_todos');
    allTodosContainer.innerHTML = this.templates.all_todos_template(templateData);

    const allListsContainer = document.querySelector('#all_lists');
    allListsContainer.innerHTML = this.templates.all_list_template(templateData);

    const completedListsContainer = document.querySelector('#completed_lists');
    completedListsContainer.innerHTML = this.templates.completed_list_template(templateData);

    const completedTodosContainer = document.querySelector('#completed_todos');
    completedTodosContainer.innerHTML = this.templates.completed_todos_template(templateData);

    const newActiveElementParent = isCompletedGroup ? document.getElementById('completed_items') : document.getElementById('all');
    const newActiveElement = newActiveElementParent.querySelector(`[data-title="${activeTitle}"]`);
    newActiveElement?.classList.add('active');
  }

  toggleModal() {
    document.querySelectorAll('div.modal').forEach(modal => {
      modal.style.display = modal.style.display === 'none' || !modal.style.display ? 'block' : 'none';
    });
    this.updateModalTopPosition(document.getElementById('form_modal'));
    document.getElementById('form_modal').firstElementChild.reset();
  }

  updateModalTopPosition(modal) {
    const topMargin = 200 + window.scrollY;

    modal.style.top = `${topMargin}px`;
  }

  populateModalFields(todo) {
    let modalForm = document.getElementById('form_modal').firstElementChild;

    modalForm.querySelector('#title').value = todo.title;
    if (todo.day) modalForm.querySelector('#due_day').value = todo.day;
    if (todo.month) modalForm.querySelector('#due_month').value = todo.month;
    if (todo.year) modalForm.querySelector('#due_year').value = todo.year;
    modalForm.querySelector('textarea').value = todo.description;
  }
}
