var notes = [];

function addNote() {
    var noteTitleInput = document.getElementById("noteTitleInput");
    var noteContentInput = document.getElementById("noteContentInput");

    var noteTitle = noteTitleInput.value.trim();
    var noteContent = noteContentInput.value.trim();

    if (noteTitle !== "" || noteContent !== "") {
        var note = {
            title: noteTitle,
            content: noteContent
        };

        notes.push(note);

        renderNotes();

        noteTitleInput.value = "";
        noteContentInput.value = "";
    } else {
        alert("Please enter a title or note content.");
    }
}

function deleteNote(index) {
    notes.splice(index, 1);
    renderNotes();
}

function renderNotes() {
    var noteList = document.getElementById("noteList");
    noteList.innerHTML = "";

    for (var i = 0; i < notes.length; i++) {
        var note = notes[i];

        var noteElement = document.createElement("div");
        noteElement.className = "note";

        var titleElement = document.createElement("h3");
        titleElement.textContent = note.title;

        var contentElement = document.createElement("p");
        contentElement.textContent = note.content;

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.setAttribute("onclick", "deleteNote(" + i + ")");

        noteElement.appendChild(titleElement);
        noteElement.appendChild(contentElement);
        noteElement.appendChild(deleteButton);

        noteList.appendChild(noteElement);
    }
}
