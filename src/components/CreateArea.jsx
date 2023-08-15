import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

export default function CreateArea(props) {
	const [note, setNote] = useState({ content: '', title: '' });
	const [showForm, setShowForm] = useState(false);

	function changeHandler(event) {
		const { name, value } = event.target;
		setNote((prevValue) => {
			return { ...prevValue, [name]: value };
		});
	}

	function showCreateForm() {
		setShowForm(true);
	}

	return (
		<div>
			<form
				className='create-note'
				onSubmit={(e) => {
					e.preventDefault();
					const validNote = note.content?.length + note.title?.length;
					if (validNote) {
						props.add(note);
						setNote({ content: '', title: '' });
						setShowForm(false);
					} else {
						// nothing
					}
				}}
			>
				{showForm ? <input onChange={changeHandler} name='title' placeholder='Title' value={note.title} /> : null}
				<textarea
					onChange={changeHandler}
					name='content'
					placeholder='Take a note...'
					value={note.content}
					rows={showForm ? '3' : '1'}
					onClick={showCreateForm}
				/>
				<Zoom in={showForm}>
					<Fab type='submit'>
						<AddIcon />
					</Fab>
				</Zoom>
			</form>
		</div>
	);
}
