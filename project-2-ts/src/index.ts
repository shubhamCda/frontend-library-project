const inputElement = document.querySelector("#user") as HTMLInputElement;
const formElement = document.querySelector("#form") as HTMLFormElement;
const mainContainer = document.querySelector(".main-container") as HTMLElement;

const dataURL = "https://api.github.com/users";

interface UserList {
	id: string;
	login: string;
	avatar_url: string;
	html_url: string;
}

async function customDataFetch<T>(
	url: string,
	options: RequestInit
): Promise<T> {
	const response = await fetch(url, options);
	const data = await response.json();

	if (!response.ok) {
		throw new Error("Please check your internet!!!");
	}
	if (data) {
		mainContainer.innerHTML = "";
	}

	return data;
}

function generateUI(singleUser: UserList) {
	const { id, login, avatar_url, html_url } = singleUser;

	mainContainer.insertAdjacentHTML(
		"beforeend",
		`
    <div class="card">
			<img src="${avatar_url}" alt="${login}">
			<hr/>
			<div class="card-footer">
				<img src="${avatar_url}" alt="${login}">
        <h3 style="color: white;">${login}</h3>
				<a href="${html_url}" target="_blank">Github</a>
			</div>
		</div>
    `
	);
}

function fetchDataApi(url: string) {
	customDataFetch<UserList[]>(url, {}).then((userInfo) => {
		for (const user of userInfo) {
			generateUI(user);
		}
	});
}

fetchDataApi(dataURL);

//Search functionality

formElement.addEventListener("submit", async (e) => {
	e.preventDefault();

	const searchQuery = inputElement.value.toLowerCase();

	try {
		const allUsersData = await customDataFetch<UserList[]>(dataURL, {});
		const searchedName = allUsersData.filter((gitUser) =>
			gitUser.login.toLowerCase().includes(searchQuery)
    );
    mainContainer.innerHTML = "";
    if (searchedName.length === 0) {
      mainContainer.insertAdjacentHTML("beforeend",
        `<p>No result found</p>`

      )
    } else {
      for (const USR of searchedName) {
        generateUI(USR);
      }
    }
  } catch (error) {
    console.error("Error", error);
  }
});
