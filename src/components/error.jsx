const ErrorShow = (props) => {
  const cls =
    "alert alert-" + props.data.class + " alert-dismissible fade show";
  return (
    <div className={cls} role="alert">
      {props.data.message}
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

export default ErrorShow;
