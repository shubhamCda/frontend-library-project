const searchElement = document.querySelector("#user") as HTMLInputElement;
const formSubmit = document.querySelector("#form") as HTMLFormElement;
const mainContainer = document.querySelector(".main-container") as HTMLElement;

const dataURL = "https://api.github.com/users";

interface userData {
  id: string;
  login: string;
  avatar_url: string;
  url: string;
}



async function customFetchData<T>(url:string, options?:RequestInit):Promise<T> {
  const response = await fetch(url, options);
  const result = await response.json();

  if (!response.ok) {
    throw new Error("Network issue...please check!!!");
    
  }
  console.log(result);
  return result
  
}


function fetchUserData(url:string) {
  customFetchData<userData[]>(url, {});
}


fetchUserData(dataURL);