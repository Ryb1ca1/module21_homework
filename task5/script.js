document.getElementById('fetchTodosButton').addEventListener('click', () => {
    const userId = document.getElementById('userIdInput').value;
    const todoListDiv = document.getElementById('todoList');

    // Очищаем предыдущее содержимое
    todoListDiv.innerHTML = '';

    if (!userId) {
        todoListDiv.innerHTML = '<p class="error">Пожалуйста, введите ID пользователя.</p>';
        return;
    }

    fetch(` https://jsonplaceholder.typicode.com/users/${userId}/todos`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Пользователь с указанным id не найден');
            }
            return response.json();
        })
        .then(todos => {
            if (todos.length === 0) {
                todoListDiv.innerHTML = '<p class="error">Пользователь с указанным id не найден</p>';
                return;
            }

            const ul = document.createElement('ul');
            todos.forEach(todo => {
                const li = document.createElement('li');
                li.textContent = todo.title;

                if (todo.completed) {
                    li.classList.add('completed');
                }

                ul.appendChild(li);
            });
            todoListDiv.appendChild(ul);
        })
        .catch(error => {
            todoListDiv.innerHTML = `<p class="error">${error.message}</p>`;
        });
});