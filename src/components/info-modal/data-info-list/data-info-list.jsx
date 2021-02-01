import React from "react";
import PropTypes from "prop-types";
import DataInfoItem from "../data-info-item/data-info-item.jsx"

const DataInfoList = (props) => {

  const {dataInfoItems} = props;

  const dataInfo = dataInfoItems.map((dataInfoItem, index) => (
    <DataInfoItem
      key={index}
      dataInfoKey={dataInfoItem.key}
      dataInfoValue={dataInfoItem.value}
    />
  ));


  return (
    <React.Fragment>
      <div className="modal-window__table-wrapper">
        <table className="modal-window__table">
          <tbody>
            {dataInfo}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};


DataInfoList.propTypes = {
  dataInfoItems: PropTypes.array,
};


export default DataInfoList;
