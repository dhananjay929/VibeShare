import React from "react";

const Editpopup = () => {
  return (
    <div >
      <a
        data-bs-toggle="modal"
        data-bs-target="#sex"
      >
        Edit post
      </a>

      <div
        className="modal fade"
        id="sex"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content" id="editpop">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit your post
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label for="recipient-name" className="col-form-label">
                    Your Title :
                  </label>
                  <input type="text" className="form-control" id="recipient-name" />
                </div>
                <div className="mb-3">
                  <label for="message-text" className="col-form-label">
                    Description :
                  </label>
                  <textarea className="form-control" id="message-text"></textarea>
                </div>
                <div className="mb-3">
                  <label for="recipient-name" className="col-form-label">
                    Tag :
                  </label>
                  <input type="text" className="form-control" id="recipient-name" />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editpopup;
