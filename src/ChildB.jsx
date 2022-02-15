import ChildC from "./ChildC";

function ChildB(props) {
  return (
    <>
      <ChildC setText={props.setText} />
    </>
  );
}

export default ChildB;
