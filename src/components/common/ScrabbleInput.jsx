import './TextSearch.css';

const ScrabbleInput = (props) => {
  return (
    <form onSubmit={props.onSubmitHandler}>
      <div className='input-group'>
        <span className='input-group-label'>&gt;</span>
        <input
          className='input-group-field {props.styleName}'
          type='text'
          id='text-search'
          pattern='[A-Za-z?].+'
          placeholder={props.placeholder} 
          onChange={props.onChangeHandler}
          required
        />
        <div className='input-group-button' id='dict-submit'>
          <button type='submit' className='button'>
            Shuffle
          </button>
        </div>
      </div>
    </form>
  );
};

export default ScrabbleInput;