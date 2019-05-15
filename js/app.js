import checkConnectivity from './connection';
import { openDB } from "idb";

(async function(document) {
    checkConnectivity(3, 1000);
})(document);


let input = document.getElementById('inputField');

let submit = document.getElementById('submit');


function isInArr ( smth, arr ) {
    let isIn = false;

    arr.forEach(function (el) {
        if (el === smth) isIn = true;
    });

    return isIn;
}

async function responseFetch(url) {
    try {
        const response = await fetch(url);
        const tabTodo = await response.json();
        for(let i = 0; i < tabTodo.length; i+=1) {
            createTask(tabTodo[i].note, tabTodo[i].id);
        }
    }
    catch (err) {
        console.log('fetch failed', err);
    }
}

async function addFetch(url, data) {
    try{
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };
        const response = await fetch(url, options);
        if (response.ok) {
            return response
            //refresh
        } else {
            console.error('error response post');
            //
        }
    }
    catch (err) {
        console.log('fetch failed', err);
    }
}

async function removeFetch(url) {
    try{
        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        };
        const response = await fetch(url, options);
        if (response.ok) {
            return response
            //refresh
        } else {
            console.error('error response delete');
            //
        }
    }
    catch (err) {
        console.log('fetch failed', err);
    }
}

function createTask ( taskDesc, id ) {
    let task = document.createElement('p'),
        desc = document.createTextNode(taskDesc);

    task.appendChild(desc);
    task.classList.add('task');
    task.id = id;

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
        removeFetch(`http://localhost:3000/posts/${this.parentNode.id}`);
        this.parentNode.parentNode.removeChild(this.parentNode);
    };
}

responseFetch('http://localhost:3000/posts');

function resetInput () {
    input.value = "";
}

function  todolist () {
    if (input.value === '') {
        alert('empty')
    } else {
        createTask(input.value);
        addFetch('http://localhost:3000/posts', {note: `${input.value}`});
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

