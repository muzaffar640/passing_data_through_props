import ChildB from "./ChildB";
function ChildA(props) {
  return (
    <>
      <ChildB setText={props.setText} />
    </>
  );
}

export default ChildA;
