const ErrorMsg = (props) => {
  return (
    <div class='ui icon message'>
      <i class='inbox icon'></i>
      <div class='content'>
        <div class='header'>Error</div>
        <p>{props.errorText}</p>
      </div>
    </div>
  );
};

export default ErrorMsg;
