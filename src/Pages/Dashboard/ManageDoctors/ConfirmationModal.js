import React from "react";

const ConfirmationModal = ({
  doctor,
  handleModalClose,
  handleDeleteDoctor,
}) => {
  return (
    <div>
      <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="confirmation-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            Are you sure you want delete {doctor.name}?
          </h3>
          <p className="py-4">If you deleted this you cannot recover it.</p>

          <div className="modal-action">
            <label
              onClick={() => handleDeleteDoctor(doctor)}
              htmlFor="confirmation-modal"
              className="btn btn-sm"
            >
              Yay!
            </label>
            <button
              onClick={handleModalClose}
              className="btn btn-sm btn-outline"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
