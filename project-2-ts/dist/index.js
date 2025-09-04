const inputElement = document.querySelector("#user");
const formElement = document.querySelector("#form");
const mainContainer = document.querySelector(".main-container");
const dataURL = "https://api.github.com/users";
async function customDataFetch(url, options) {
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
function generateUI(singleUser) {
    const { id, login, avatar_url, html_url } = singleUser;
    mainContainer.insertAdjacentHTML("beforeend", `
    <div class="card">
			<img src="${avatar_url}" alt="${login}">
			<hr/>
			<div class="card-footer">
				<img src="${avatar_url}" alt="${login}">
        <h3 style="color: white;">${login}</h3>
				<a href="${html_url}" target="_blank">Github</a>
			</div>
		</div>
    `);
}
function fetchDataApi(url) {
    customDataFetch(url, {}).then((userInfo) => {
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
        const allUsersData = await customDataFetch(dataURL, {});
        const searchedName = allUsersData.filter((gitUser) => gitUser.login.toLowerCase().includes(searchQuery));
        mainContainer.innerHTML = "";
        if (searchedName.length === 0) {
            mainContainer.insertAdjacentHTML("beforeend", `<p>No result found</p>`);
        }
        else {
            for (const USR of searchedName) {
                generateUI(USR);
            }
        }
    }
    catch (error) {
        console.error("Error", error);
    }
});
export {};
//# sourceMappingURL=index.js.map