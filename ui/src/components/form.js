import {useState } from 'react';

const Form = () => {
    const [formModel, setFormModel] = useState({
        userName: "",
        userPassword: "",
      });
    
      const [formErrorModel, setFormErrorModel] = useState({
        userName: false,
        userPassword: false,
      });
    
      const onChange = (value, field) => {
        setFormModel({ ...formModel, [field]: value });
      };
    
      const formValidation = (e) => {
        e.preventDefault();
        const obj = {
          userName: formModel.userName.trim() === "",
          userPassword: formModel.userPassword.trim() === "",
        };
    
        console.log(obj);
    
        setFormErrorModel(obj);
        if (Object.values(obj).includes(true)) {
          alert("Giriş yaparken bir hatayla karşılaşıldı.");
          return;
        }
        sendForRequest();
      };
    
      const sendForRequest = () => {
        setTimeout(() => {
          alert("Kullanıcı girişi başarılı!");
        }, 2000);
      };

    return (
        <div className="flex flex-col items-center justify-center h-screen overflow-y-hidden w-full">
        <form
          className="flex flex-col items-center justify-center shadow-md shadow-gray-500 rounded px-8 pt-6 my-5"
          onSubmit={formValidation}
        >
          <div className="mb-4 w-80">
            <label
              className="block text-gray-800 text-sm font-bold mb-4"
              htmlFor="userName"
            >
              Kullanıcı Adı
            </label>
            <input
              value={formModel.userName}
              onChange={(e) => {
                onChange(e.target.value, "userName");
              }}
              name="userName"
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 focus:outline-none first-letter:
          focus:shadow-violet-600"
            />
            {formErrorModel.userName && (
              <p className="text-xs text-red-600 mt-2">Kullanıcı adı hatalı!</p>
            )}
          </div>
  
          <div className="mb-4 w-80">
            <label
              className="block text-gray-800 text-sm font-bold mb-4"
              htmlFor="userName"
            >
              Şifre
            </label>
            <input
              value={formModel.userPassword}
              onChange={(e) => {
                onChange(e.target.value, "userPassword");
              }}
              name="password"
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 focus:outline-none first-letter:
          focus:shadow-violet-600 "
            />
            {formErrorModel.userPassword && (
              <p className="text-xs text-red-600 mt-2">Şifre hatalı!</p>
            )}
          </div>
  
          <div className="flex items-center justify-center my-4 w-80">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold text-sm cursor-pointer focus:outline-none focus:shadow-blue-500 px-4 py-2 rounded"
            >
              Giriş yap
            </button>
          </div>
        </form>
      </div>
    )
}

export default Form;