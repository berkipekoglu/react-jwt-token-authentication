import React from "react"
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


export function refresh() {
  // setTimeout(() => {
  //   window.location.reload();
  // }, 2000);
  let counter = 2;
  const timer = setInterval(() => {
    counter = counter - 1;
    if (counter === 0) {
      clearInterval(timer);
      window.location.reload();
    }

    toast(`Sayfa ${counter} saniye içerisinde yenilenecek.`, {
      icon: "✨",
    });
  }, 2000);
}

export function Logout(){
    //const navigate = useNavigate();
    localStorage.clear();
    let counter = 2;

    const timer = setInterval(() => {
      counter = counter - 1;
      if (counter === 0) {
        clearInterval(timer);
        window.location.reload();
      }
  
      toast(`Çıkış yapıldı, birazdan yönlendireleceksiniz.`, {
        icon: "👌",
      });
    }, 1000);
}