export const mockApi = {
  fetchUsers: async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));

    return [
      { id: 1, name: "John Doe", email: "john.doe@example.com" },
      { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
      { id: 3, name: "Tom Johnson", email: "tom.johnson@example.com" },
    ];
  },
};
