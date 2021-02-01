import React from "react";
import ReactModal from 'react-modal';
import PropTypes from "prop-types";
import DataInfoList from "../data-info-list/data-info-list.jsx"

ReactModal.setAppElement('.user-page');

const InfoModal = (props) => {

  const {openState, title, onCloweModalWindow, dataList} = props;

  return (
    <React.Fragment>
      <ReactModal
         isOpen={openState}
         contentLabel={title}
         onRequestClose={onCloweModalWindow}
         className="modal-window"
         overlayClassName="modal-overlay"
      >
        <div className="modal-window__data">
          <div className="modal-window__header">
            <p className="modal-window__title">{title}</p>
            <button className="modal-window__close-button" onClick={onCloweModalWindow}>&#10006;</button>
          </div>
          <div className="modal-window__main">
            <DataInfoList
              dataInfoItems={dataList}
            />
          </div>
        </div>
      </ReactModal>
    </React.Fragment>
  );
};


InfoModal.propTypes = {
  openState: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  onCloweModalWindow: PropTypes.func.isRequired,
  dataList: PropTypes.array,

};


export default InfoModal;
