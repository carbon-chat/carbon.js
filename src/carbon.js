async function apiCall(apiUrl, action, body, auth) {
    const url = apiUrl + action;
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    };
    if (auth) {
        options.headers.Authorization = 'Bearer ' + auth;
    }
    const response = await fetch(url, options);
    return await response.json();
}

class API {

    constructor(apiUrl) {
        this.apiUrl = apiUrl;
    }

    signup(username, password) {
        return apiCall(this.apiUrl, 'register', { username, password });
    }

    login(username, password) {
        return apiCall(this.apiUrl, 'login', { username, password });
    }

    createChat(auth, name) {
        return apiCall(this.apiUrl, 'createChat', { name }, auth);
    }

    sendMessage(auth, chatId, message) {
        return apiCall(this.apiUrl, 'createChatMessage', { chatId, content: message }, auth);
    }

    getMessages(auth, chatId) {
        return apiCall(this.apiUrl, 'getChatMessages', { chatId }, auth);
    }
}

export default API;