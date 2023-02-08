const ErrorMsg = (props) => {
  return (
    <div className='ui icon message' style={{margin: '1rem auto', width: 600, backgroundColor: 'var(--off-white)', padding: 10}}>
      <div className='content' style={{textAlign: 'center'}}>
        <i className='bug icon' style={{fontSize: '2rem'}}></i>
        <div className='header'>Error: </div>
        <p>{props.errorText}</p>
      </div>
    </div>
  );
};

export default ErrorMsg;
