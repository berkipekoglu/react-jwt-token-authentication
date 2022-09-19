import React, { useEffect, useState, Fragment, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../FormFields/Button";
import { Dialog, Transition } from "@headlessui/react";
import {refresh} from '../../utils/utils'

import toast from "react-hot-toast";

function BasicTable({
  columns,
  rows,
  editModal,
  addModal,
  updateFunc,
  addFunc,
  deleteFunc,
  getFunc
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const modalState = useSelector((state) => state.modal);
  const modalOpen = modalState.modal;
  const modalData = modalState.data;
  const [modalTitle, setModalTitle] = useState("");
  const [modalType, setModalType] = useState("");

  const onClick_edit = (row) => {
    console.log("ROW: ", row);
    setModalTitle("Güncelle");
    setModalType("update");

    dispatch({
      type: "open",
      payload: {
        modal: true,
        data: { ...row },
      },
    });

    setIsOpen(true);
  };

  const onClick_add = () => {
    setModalTitle("Yeni Kayıt Ekle");
    setModalType("add");

    dispatch({
      type: "open",
      payload: {
        modal: true,
        data: {},
      },
    });

    setIsOpen(true);
  };

  const dispatch = useDispatch();

  useEffect(() => {}, []);

  useState(() => {
    console.log(isOpen, isAddOpen);
  }, [modalState, modalOpen, isOpen, isAddOpen]);

  return (
    <>
      {modalOpen && (
        <ModalEdit
          isOpenParams={modalOpen}
          data={modalData}
          editModal={editModal}
          addModal={addModal}
          _updateFunc={updateFunc}
          _addFunc={addFunc}
          _deleteFunc={deleteFunc}
          _modalTitle={modalTitle}
          type={modalType}
          _getFunc={getFunc}
        />
      )}
      <div className="">
        <div className="pb-4 bg-transparent dark:bg-gray-900 flex justify-start">
          <button
            type="button"
            onClick={() => onClick_add()}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-1.5 px-4 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <span className="mr-3">Yeni Kayıt</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </button>
        </div>
        <div className=" relative shadow-md sm:rounded-lg w-full">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                {columns.map((column, index) => (
                  <th scope="col" className="py-3 px-6" key={index}>
                    {column.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, x) => {
                let xData = [];
                let sira = [];
                let keys = [];
                let values = [];
                for (const [key, value] of Object.entries(row)) {
                  keys.push(key);
                  values.push(value);
                }

                for (let i = 0; i < columns.length; i++) {
                  for (let j = 0; j < keys.length; j++) {
                    if (columns[i].type === keys[j]) {
                      sira.push(keys[j]);
                      xData.push({ [keys[j]]: values[j] });
                    }
                  }
                }

                return (
                  <tr
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    key={x}
                  >
                    {xData.map((data, index) =>
                      index === 1 ? (
                        <th
                          className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          key={index}
                        >
                          {Object.values(data)}
                        </th>
                      ) : (
                        <td className="py-4 px-6" key={index}>
                          {Object.values(data)}
                        </td>
                      )
                    )}

                    {
                      <td className="py-4 px-6" key={x}>
                        <div className="w-full flex justify-end">
                          <div className="w-20">
                            <Button
                              buttonType="GradientPinkToOrange"
                              onClick={() => onClick_edit(row)}
                              title="Detay"
                            />
                          </div>
                        </div>
                      </td>
                    }
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

const ModalAdd = ({ isOpenParams, _addFunc }) => {};

const ModalEdit = ({
  isOpenParams,
  data,
  editModal,
  addModal,
  _updateFunc,
  _addFunc,
  _deleteFunc,
  _getFunc,
  _modalTitle,
  type
}) => {
  let [isOpen, setIsOpen] = useState(isOpenParams);
  const [checked, setChecked] = useState(false);
  const modalActionInputs = type === "add" ? addModal : editModal;
  const dispatch = useDispatch();
  const updateFunc = _updateFunc;
  const deleteFunc = _deleteFunc;
  const getFunc = _getFunc;
  const addFunc = _addFunc;
  const stateData = useSelector(state => state.data.data )
  const [_data, _setData] = useState(data)

  function closeModal() {
    dispatch({
      type: "close",
      payload: { modal: false },
    });
  }

  function openModal() {
    setIsOpen(true);
  }

  const [inputValues, setInputValues] = useState((old) => {
    let obj = {};
    for (const [key, value] of Object.entries(data)) {
      // console.log(`${key}: ${value}`);
      obj = { ...obj, [key]: value };
    }
    return obj;
  });

  const inputHandler = (e) => {
    if (e.target.type === "checkbox") {
      setChecked(e.target.checked);
      setInputValues({ ...inputValues, [e.target.name]: e.target.checked });
    } else setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  const checkBoxHandler = (e) => {
    setChecked(!checked);
  };

  useEffect(() => {
    setChecked(inputValues?.is_active)
  }, [inputValues]);

  const getHandler = () => {
    getFunc()
    .then(resp => {
      dispatch({
        type: 'data',
        payload: {
          data: resp.data
        }
      })
      
    })
    .catch((err) => {
      console.log("Veri çekilirken bir hata oluştu: ", err.message)
    })
  }

  const updateHandler = () => {
    updateFunc(inputValues)
      .then((response) => {
        toast.success("Kayıt güncellendi");
        dispatch({
          type: 'data',
          payload: response.data
        })
        closeModal();
        refresh();
      })
      .catch((err) => {
        console.log(err);
        toast.error("Kayıt güncellenirken bir sorun oluştu! \n ", err);
      });
  };

  useEffect(() => {
    _setData(stateData)
  }, [stateData])

  const deleteHandler = () => {
    deleteFunc(inputValues)
      .then((response) => {
        toast.success("Kayıt silindi.");
        closeModal();
        refresh();
      })
      .catch((err) => {
        toast.error("Kayıt silinirken bir sorun oluştu! \n ", err);
      });
  };

  const addHandler = () => {
    addFunc(inputValues)
      .then((response) => {
        toast.success("Kayıt eklendi.");
        closeModal();
        refresh();
      })
      .catch((err) => {
        toast.error("Kayıt eklenirken bir hata oluştu! \n ", err);
      });
  };

  

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    <div className="flex justify-between items-start rounded-t border-b dark:border-gray-100 mb-7">
                      <h3 className="text-xl font-semibold text-gray-600 dark:text-white">
                        {_modalTitle}
                      </h3>
                      <button
                        type="button"
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-toggle="defaultModal"
                        onClick={closeModal}
                      >
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span className="sr-only">Kapat</span>
                      </button>
                    </div>
                  </Dialog.Title>
                  <div className="mt-2">
                    <form>
                      <div className="grid gap-6 mb-6 md:grid-cols-2">
                        {modalActionInputs.map((item, index) => {
                          if (item.key === "description") {
                            return (
                              <div className="col-span-full" key={index}>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                  {item.name}
                                </label>
                                <textarea
                                  name="description"
                                  rows="4"
                                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  placeholder="birkaç cümlecik.."
                                  value={inputValues[item?.key] || ''}
                                  onChange={inputHandler}
                                ></textarea>
                              </div>
                            );
                          } else if (item.type === "checkbox") {
                            return (
                              <div key={index}>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                  {item?.name}
                                </label>
                                <div className="flex items-center gap-2">
                                  <input
                                    type={item?.type}
                                    name={item?.key}
                                    className="bg-gray-50 border border-gray-300 text-rose-500 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    value={inputValues[item?.key] || ''}
                                    required
                                    checked={checked || false}
                                    onChange={inputHandler}
                                  />
                                  <label className="text-rose-500 font-medium text-sm">
                                    Etkinleştir
                                  </label>
                                </div>
                              </div>
                            );
                          }
                          return (
                            <div key={index}>
                              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                {item?.name}
                              </label>
                              <input
                                type={item?.type}
                                name={item?.key}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                value={inputValues[item?.key] || ''}
                                required
                                onChange={inputHandler}
                              />
                            </div>
                          );
                        })}
                      </div>
                    </form>
                  </div>

                  <div className="mt-4 flex justify-between">
                    <div className="flex gap-2">
                      {type === "update" && (
                        <button
                          type="button"
                          className="inline-flex justify-center rounded-md border border-transparent bg-rose-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-rose-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2"
                          onClick={deleteHandler}
                        >
                          Sil
                        </button>
                      )}
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-orange-100 px-4 py-2 text-sm font-medium text-orange-900 hover:bg-orange-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        İptal
                      </button>
                    </div>

                    {type === "update" ? (
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={updateHandler}
                      >
                        Güncelle
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={addHandler}
                      >
                        Yeni Kayıt Ekle
                      </button>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default BasicTable;
