import axios from 'axios';

const fetchPosts = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log('Status:', response.status);
    if (Array.isArray(response.data)) {
      console.log('Data is an array of posts');
    } else {
      console.error('Data format is incorrect');
    }
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
};

const fetchPostById = async (id) => {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    console.log('Status:', response.status);
    const post = response.data;
    if (post && post.id && post.title && post.body) {
      console.log('Post structure is correct');
    } else {
      console.error('Post data structure is incorrect');
    }
  } catch (error) {
    console.error('Error fetching post:', error);
  }
};

const fetchUsers = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log('Status:', response.status);
    if (Array.isArray(response.data)) {
      console.log('Data is an array of users');
    } else {
      console.error('Data format is incorrect');
    }
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};

const createPost = async () => {
  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
      title: 'foo',
      body: 'bar',
      userId: 1
    });
    console.log('Status:', response.status);
    const newPost = response.data;
    if (newPost && newPost.id && newPost.title === 'foo' && newPost.body === 'bar') {
      console.log('New post was created correctly');
    } else {
      console.error('New post data is incorrect');
    }
  } catch (error) {
    console.error('Error creating post:', error);
  }
};

const createUser = async () => {
  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/users', {
      name: 'John Doe',
      username: 'johndoe',
      email: 'johndoe@example.com'
    });
    console.log('Status:', response.status);
    const newUser = response.data;
    if (newUser && newUser.id && newUser.name === 'John Doe') {
      console.log('New user was created correctly');
    } else {
      console.error('New user data is incorrect');
    }
  } catch (error) {
    console.error('Error creating user:', error);
  }
};

fetchPosts();
fetchPostById(1);
fetchUsers();
createPost();
createUser();
