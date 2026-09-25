const API_URL = "https://dummyjson.com/users";

// GET ALL STUDENTS
export const getStudents = async () => {
  const response = await fetch(`${API_URL}?limit=30`);

  if (!response.ok) {
    throw new Error("Failed to fetch students");
  }

  const data = await response.json();

  console.log("API DATA:", data);

  return data.users;
};

// GET SINGLE STUDENT
export const getStudent = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch student");
  }

  return await response.json();
};

// CREATE STUDENT
export const createStudent = async (student) => {
  const response = await fetch(`${API_URL}/add`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(student),
  });

  if (!response.ok) {
    throw new Error("Failed to create student");
  }

  return await response.json();
};

// UPDATE STUDENT
export const updateStudent = async (id, student) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(student),
  });

  if (!response.ok) {
    throw new Error("Failed to update student");
  }

  return await response.json();
};

// DELETE STUDENT
export const deleteStudent = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete student");
  }

  return await response.json();
};