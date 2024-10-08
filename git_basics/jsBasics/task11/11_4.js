class ApiService {
    async fetchTodo() {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      
      if (!response.ok) {
        throw new Error('Error while fetching todo');
      }
  
      const todo = await response.json();
      return todo;
    }
  
    async fetchUser() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
      
      if (!response.ok) {
        throw new Error('Error while fetching user');
      }
  
      const user = await response.json();
      return user;
    }
  }
  
  class DataFetcher {
    constructor(apiService) {
      this.apiService = apiService;
    }
  
    async getAllData() {
      try {
        const [todo, user] = await Promise.all([
          this.apiService.fetchTodo(),
          this.apiService.fetchUser()
        ]);
        console.log('Object todo:', todo);
        console.log('Object user:', user);
      } catch (error) {
        console.error('Error while running one of promises:', error);
      }
    }
  
    async getFirstData() {
      try {
        const result = await Promise.race([
          this.apiService.fetchTodo(),
          this.apiService.fetchUser()
        ]);
        console.log('First from (todo or user):', result);
      } catch (error) {
        console.error('Error while running one of promises:', error);
      }
    }
  }
  
  const apiService = new ApiService();
  const dataFetcher = new DataFetcher(apiService);
  
  dataFetcher.getAllData();
  dataFetcher.getFirstData();
  