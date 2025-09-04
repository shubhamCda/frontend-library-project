const searchElement = document.querySelector("#user") as HTMLInputElement;
const formSubmit = document.querySelector("#form") as HTMLFormElement;
const mainContainer = document.querySelector(".main-container") as HTMLElement;

const dataURL = "https://api.github.com/users";

interface UserData {
	id: string;
	login: string;
	avatar_url: string;
	html_url: string;
}

async function customFetchData<T>(
	url: string,
	options?: RequestInit
): Promise<T> {
	const response = await fetch(url, options);
	const result = await response.json();

	if (!response.ok) {
		throw new Error("Network issue...please check!!!");
	}
	console.log(result);
	return result;
}

function generateUI(singleUser: UserData) {
	const { id, avatar_url, login, html_url } = singleUser;

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

function fetchUserData(url: string) {
	customFetchData<UserData[]>(url, {}).then((user) => {
		for (const singleUser of user) {
			generateUI(singleUser);
			console.log(`user:${singleUser}`);
		}
	});
}

fetchUserData(dataURL);

//search functionality

formSubmit.addEventListener("submit", async (e) => {
	e.preventDefault();
	const searchInput = searchElement.value.toLowerCase();

	try {
		const allUserData = await customFetchData<UserData[]>(dataURL, {});
		const matchingUser = allUserData.filter((user) =>
			user.login.toLowerCase().includes(searchInput)
		);

		mainContainer.innerHTML = "";
		if (matchingUser.length === 0) {
			mainContainer?.insertAdjacentHTML(
				"beforeend",
				`<p class="empty-msg">No matching user found!</p>
        `
			);
		} else {
			for (const searchUser of matchingUser) {
				generateUI(searchUser);
			}
		}
	} catch (error) {
		console.error("Error", error);
	}
});
