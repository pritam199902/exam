import Nav from "../nav";

const NewTest = () => {
  return (
    <>
      <Nav data={{ section: "New Test" }} />
      <div className="container">
        {/* TEST HEADER */}
        <div className="row mt-2">
          <div className="col m-auto">
            <div className="card shadow">
              <div className="card-body py-2">
                <h4 className="text-center" style={{ color: txtColor.color }}>
                  HEADER
                </h4>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </>
  );
};

export default NewTest;

const txtColor = {
  color: "#777777",
  light: "#aaaaaa",
};
