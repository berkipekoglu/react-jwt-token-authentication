import React, { useEffect, useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../FormFields/Button";
import { Dialog, Transition } from "@headlessui/react";
import { putSingleOrganization } from "../../api/lib/organizationApi";
import toast from "react-hot-toast";

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
      {modalOpen && <ModalEdit isOpenParams={modalOpen} data={modalData} />}
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
      payload: { modal: false },
    });
  }

  function openModal() {
    setIsOpen(true);
  }

  const [inputValues, setInputValues] = useState({
    organization_name: data.organization_name,
    organization_id: data.organization_id,
    description: data.description,
    user_id: data.user_id,
    username: data.username,
    password: data.password,
    id: data.id,
  });

  const inputHandler = (e) => {
    setInputValues({...inputValues, [e.target.name]: e.target.value });

  };

  const updateHandler = () => {
    console.log("Güncellenen values", inputValues)
    
    putSingleOrganization(inputValues)
    .then(response => {
      toast.success("Organizasyon güncellendi")
      closeModal();
    })
    .catch(err => {
      console.log(err)
      toast.error("Organizasyon güncellenirken bir sorun oluştu! \n ", err)
    })
  };

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
                    <div className="flex justify-between items-start rounded-t border-b dark:border-gray-100 mb-7">
                      <h3 className="text-xl font-semibold text-gray-600 dark:text-white">
                        Düzenle
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
                        <div>
                          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Organizasyon Adı
                          </label>
                          <input
                            type="text"
                            name="organization_name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Organizasyon adı"
                            value={inputValues.organization_name}
                            required
                            onChange={inputHandler}
                          />
                        </div>
                        <div>
                          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Kullanıcı
                          </label>
                          <input
                            type="text"
                            name="username"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={inputValues.username}
                            required
                            onChange={inputHandler}
                          />
                        </div>
                        <div className="col-span-full">
                          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Organizasyon ID
                          </label>
                          <input
                            type="text"
                            name="organization_id"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="123-45-678"
                            value={inputValues.organization_id}
                            required
                            onChange={inputHandler}
                          />
                        </div>
                        <div>
                          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Kullanıcı ID
                          </label>
                          <input
                            type="number"
                            name="user_id"
                            //disabled
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={inputValues.user_id}
                            required
                            onChange={inputHandler}
                          />
                        </div>
                        <div>
                          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Kullanıcı Şifresi
                          </label>
                          <input
                            type="password"
                            name="password"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={inputValues.password}
                            required
                            onChange={inputHandler}
                          />
                        </div>
                        <div className="col-span-full">
                          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Açıklama
                          </label>
                          <textarea
                            name="description"
                            rows="4"
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="birkaç cümlecik.."
                            value={inputValues.description}
                            onChange={inputHandler}
                          ></textarea>
                        </div>
                      </div>
                    </form>
                  </div>

                  <div className="mt-4 flex justify-between">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-rose-100 px-4 py-2 text-sm font-medium text-rose-900 hover:bg-rose-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      İptal
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={updateHandler}
                    >
                      Güncelle
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
