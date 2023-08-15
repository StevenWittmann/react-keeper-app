import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';

import './App.css';
import CreateArea from './components/CreateArea';

function App() {
	const storedNotes = JSON.parse(localStorage.getItem('keepNotes')) || [];
	const [noteList, setNoteList] = useState(storedNotes);

	function addToNoteList(newNoteObject) {
		setNoteList((prevNotes) => {
			const newNotes = [...prevNotes, newNoteObject];
			localStorage.setItem('keepNotes', JSON.stringify(newNotes));
			return newNotes;
		});
	}

	function removeFromNoteList(delIndex) {
		const filteredNotes = noteList.filter((note, index) => index != delIndex);
		setNoteList(filteredNotes);
		localStorage.setItem('keepNotes', JSON.stringify(filteredNotes));
	}

	return (
		<>
			<Header />
			<CreateArea add={addToNoteList} />
			{noteList.map((note, index) => (
				<Note key={index} index={index} remove={removeFromNoteList} title={note.title} content={note.content} />
			))}
			<Footer />
		</>
	);
}

export default App;
