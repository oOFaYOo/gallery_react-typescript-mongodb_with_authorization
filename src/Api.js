"use strict"

export default class Api {

    async getImagesAsync () {
        let response = await fetch("/images", {
            method: "GET"
        });
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error(`Can't get images. Error code: ${response.status}`);
        }
    }

    async addImage (arr) {
        for(let image of arr) {
            let response = await fetch("images" + image.name, {
                method: "PUT",
                headers: {
                    "Content-Type": image.type,
                },
                body: image
            });
            if(response.status !== 200){
                throw new Error(`Unable to add image. Error code: ${response.status}`);
            }
        }
    }

    async deleteImage (picSRC) {
        let response = await fetch(picSRC, {
            method: "DELETE",
        });

        if(response.status !== 200){
            throw new Error(`Image cannot be deleted. Error code: ${response.status}`);
        }
    }

    async signIn (login, password) {
        let response = await fetch("/signin", {
            method: "PUT",
            body: JSON.stringify({login: login, password: password})
        });

        if (response.status !== 200)
            throw new Error(`Can't sign in user '${login}': StatusCode='${response.status}' ErrorMessage='${await response.text()}'`);
    }

    async signUp (login, password) {
        let response = await fetch("/signup", {
            method:"PUT",
            body: JSON.stringify({login: login, password: password})
        });

        if (response.status !== 200)
            throw new Error(await response.text());
    }

}

