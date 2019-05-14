let input = document.getElementById('inputField');

let submit = document.getElementById('submit');


function isInArr ( smth, arr ) {
    let isIn = false;

    arr.forEach(function (el) {
        if (el === smth) isIn = true;
    });

    return isIn;
}

function createTask ( taskDesc ) {
    let task = document.createElement('p'),
        desc = document.createTextNode(taskDesc);

    task.appendChild(desc);
    task.classList.add('task');

    // Done or not done
    task.addEventListener('click', function () {
        if (isInArr('done', task.classList)) {
            task.classList.remove('done');
        } else {
            task.classList.add('done');
        }
    });


    // Delete button
    let del = document.createElement('button');
    del.appendChild(document.createTextNode(''));
    del.innerHTML = '<i class="fas fa-times"></i>';
    del.classList.add('delete');
    task.appendChild(del);

    document.getElementById('tasks').appendChild(task);

    del.onclick = function () {
        this.parentNode.parentNode.removeChild(this.parentNode);
    };

}

createTask('Click on me to be done');

function resetInput () {
    input.value = "";
}

function  todolist () {
    if (input.value === '') {
        alert('empty')
    } else {
        createTask(input.value);
        resetInput();
    }
}

// Click to submit
submit.onclick = function () {
    todolist();
}

// Press enter to submit task
input.addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
        todolist();
    }
});

