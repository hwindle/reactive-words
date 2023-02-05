const ErrorMsg = (props) => {
  return (
    <div className='ui icon message'>
      <i className='bug icon'></i>
      <div className='content'>
        <div className='header'>Error</div>
        <p>{props.errorText}</p>
      </div>
    </div>
  );
};

export default ErrorMsg;
