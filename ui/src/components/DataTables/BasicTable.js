import React, { useEffect, useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../FormFields/Button";
import { Dialog, Transition } from "@headlessui/react";

function BasicTable({ columns, rows }) {
  
  const [isOpen, setIsOpen] = useState(false);
  const modalState = useSelector((state) => state.modal);
  const modalOpen = modalState.modal;
  const modalData = modalState.data;

  const onClick = (row) => {
    console.log("ROW: ", row);

    dispatch({
      type: "open",
      payload: {
        modal: true,
        data: { ...row },
      },
    });

    setIsOpen(true);
  };

  console.log("modalstte", modalState);

  const dispatch = useDispatch();

  useEffect(() => {}, []);

  useState(() => {
    console.log(isOpen);
  }, [modalState, modalOpen, isOpen]);

  return (
    <>
     { modalOpen && <ModalEdit isOpenParams={modalOpen} data={modalData} />}
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
                      <div className="w-20">
                        <Button
                          buttonType="GradientPinkToOrange"
                          onClick={() => onClick(row)}
                          title="Detay"
                        />
                      </div>
                    </td>
                  }
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

const ModalEdit = ({ isOpenParams, data }) => {
  let [isOpen, setIsOpen] = useState(isOpenParams);
  const dispatch = useDispatch();


  function closeModal() {
    dispatch({
      type: "close",
      payload: {modal: false},
    })
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      {/* <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
      </div> */}

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
                    Payment successful
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                      <br />
                      {data.organization_name}
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
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
