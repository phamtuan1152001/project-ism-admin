import "../bootstrap.scss";
import "../responsive.scss";

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router";
import moment from "moment/moment";

// @selector
import { getUserData } from "@store/user/selector";
import { getCodeLanguage } from "@store/common/selectors";

// @service
import { getListProducts, deleteProduct } from "../Store/service";

// @constants
import { RETCODE_SUCCESS } from "@configs/contants";

// @antd
import { Table, notification } from "antd";

// @utility
import { formatToCurrencyVND } from "@utility/common";

// @svg and img
import { DeleteIcon, EditIcon } from "../assets/svg";

const Home = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const userInfo = useSelector(getUserData);
  const codeLanguage = useSelector((state) => getCodeLanguage(state));

  const [loading, setLoading] = useState(false);
  const [listProducts, setListProducts] = useState([]);
  // console.log("userInfo", userInfo);

  useEffect(() => {
    fetchGetListProducts();
  }, []);

  const fetchGetListProducts = async () => {
    try {
      setLoading(true);
      const res = await getListProducts({ payload: "" });
      if (res?.data?.retCode === RETCODE_SUCCESS) {
        const listData = res?.data?.retData?.map((item, index) => {
          return {
            key: index,
            ...item,
          };
        });
        setListProducts(listData);
      }
    } catch (err) {
      console.log("FETCH FAIL", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchDeleteProduct = async (item) => {
    try {
      const res = await deleteProduct({
        payload: item?._id,
      });
      if (res?.data?.retCode === RETCODE_SUCCESS) {
        notification.success({
          message: "Successfully",
          description: "Delete product successfully",
          duration: 2,
        });
        fetchGetListProducts();
      } else {
        notification.error({
          message: "Fail",
          description: "Delete product unsuccessfully",
          duration: 2,
        });
      }
    } catch (err) {
      console.log("FETCH FAIL!", err);
    }
  };

  const goToCreateProducts = () => {
    history.push("/manage-products/create-product");
  };

  const columnsTable = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (img) => {
        return (
          <div className="img-item-box">
            <img src={img} className="img-item" alt="img-item" />
          </div>
        );
      },
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (currency) => (currency ? formatToCurrencyVND(currency) : "--"),
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Day of birth",
      dataIndex: "dob",
      key: "dob",
      render: (dob) =>
        dob && moment(dob).isValid() ? moment(dob).format("DD/MM/YYYY") : "--",
    },
    {
      title: "Weight",
      dataIndex: "weight",
      key: "weight",
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Edit",
      dataIndex: "edit",
      key: "edit",
      render: (_, record) => {
        // console.log("item", record);
        return (
          <div className="d-flex flex-row justify-content-between align-items-center">
            <div className="edit-icon d-flex flex-column justify-content-center align-items-center">
              <EditIcon />
            </div>
            <div
              onClick={() => fetchDeleteProduct(record)}
              className="delete-icon d-flex flex-column justify-content-center align-items-center"
            >
              <DeleteIcon />
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="manage-products">
      <div className="d-flex flex-row justify-content-between align-items-center mb-3">
        <h1 className="manage-products__title">Products List</h1>

        <button
          className="manage-products__create"
          onClick={goToCreateProducts}
        >
          Create new products
        </button>
      </div>
      <Table
        columns={columnsTable}
        dataSource={listProducts}
        loading={loading}
        pagination={false}
      />
    </div>
  );
};
export default Home;
