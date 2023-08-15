import DeleteIcon from '@mui/icons-material/Delete';

export default function Note(props) {
	return (
		<div className='note'>
			<h3>{props.title}</h3>
			<p>{props.content}</p>
			<button onClick={() => props.remove(props.index)}>
				<DeleteIcon />
			</button>
		</div>
	);
}
