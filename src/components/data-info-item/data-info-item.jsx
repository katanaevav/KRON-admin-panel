import React from "react";
import PropTypes from "prop-types";

const DataInfoItem = (props) => {

  const {dataInfoKey, dataInfoValue} = props;

  return (
    <React.Fragment>
      <tr className="modal-window__table-row">
        <td className="modal-window__table-data">{dataInfoKey}</td>
        <td className="modal-window__table-data">{dataInfoValue}</td>
      </tr>
    </React.Fragment>
  );
};

DataInfoItem.propTypes = {
  dataInfoKey: PropTypes.string,
  dataInfoValue: PropTypes.string,
};

export default DataInfoItem;
