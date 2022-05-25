class NotionService {
  static async getAllPost() {
    const response = await fetch('http://localhost:3000/notion/all');
    const result = await response.json();
    return result;
  }
}

export default NotionService;
