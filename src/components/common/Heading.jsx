import './Heading.css';

const Heading = (props) => {
  const {pageTitle} = props;
  return <h2>{pageTitle}</h2>;
};

export default Heading;