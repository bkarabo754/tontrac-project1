import axios from "axios";

const baseUrl = "http://localhost:3000";

export const getUsers = async () => {
    try {
        const response = await axios.get(`${baseUrl}/users`);
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};

export const addPost = async (postData) => {
    try {
        const response = await axios.post(`${baseUrl}/posts`, postData, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        return response.data;
    } catch (error) {
        console.log("Error Adding posts", error);
        throw error;
    }
}

export const getUserPosts = async (userId) => {
    try {
        const response = await axios.get(`${baseUrl}/posts?userId=${userId}`);  // Fetch posts by userId
        return response.data;
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
};

export const updatePost = async (postId, post) => {
    const response = await axios.put(`${baseUrl}/posts/${postId}`, post);
    return response.data;
};

export const getPostById = async (postId) => {
    const response = await axios.get(`${baseUrl}/posts/${postId}`);
    return response.data;
};

export const getUserById = async (userId) => {
    try {
        const response = await axios.get(`${baseUrl}/users/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user details:', error);
        throw error;
    }
};





export const addUser = async (userData) => {
    try {
        const response = await axios.post(`${baseUrl}/users`, userData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error adding user:', error);
        throw error;
    }
};

export const deleteUser = async (userId) => {
    try {
        const response = await axios.delete(`${baseUrl}/users/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
};

export const deleteAllUsers = async () => {
    try {
        await axios.delete(`${baseUrl}/users/all`);
        return true;
    } catch (error) {
        console.error('Error deleting all users:', error);
        throw error;
    }
};


export const saveUser = async (userData, userId = null) => {
    const url = userId ? `${baseUrl}/users/${userId}` : `${baseUrl}/users`;
    const method = userId ? 'PUT' : 'POST';
    try {
        const response = await axios({
            method,
            url,
            headers: { 'Content-Type': 'application/json' },
            data: userData,
        });
        return response.data;
    } catch (error) {
        console.error('Error saving user:', error);
        throw error;
    }
};
