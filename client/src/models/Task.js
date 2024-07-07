export const getAllTasks = async () => {
    const req = await fetch("http://localhost:3000/tasks", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "GET",
    });
    const data = await req.json();
    return {
      status: req.status,
      msg: data.msg,
      payload: data.payload
    }
  };
  export const getTaskById = async (id) => {
    const req = await fetch(`http://localhost:3000/tasks/${id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "GET",
    });
    const data = await req.json();
    return {
      status: req.status,
      msg: data.msg,
      payload: data.payload
    }
  };
  
  export const createTask = async (formData) => {
    const req = await fetch(`http://localhost:3000/tasks`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(formData),
    });
    const data = await req.json();
    return {
      status: req.status,
      msg: data.msg,
      payload: data.payload
    }
  };
  
  export const updateTask = async (id, formData) => {
    const req = await fetch(`http://localhost:3000/tasks/${id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify(formData),
    });
    const data = await req.json();
    return {
      status: req.status,
      msg: data.msg,
      payload: data.payload
    }
  };
  
  export const deleteTask = async (id) => {
    const req = await fetch(`http://localhost:3000/tasks/${id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "DELETE",
    });
    const data = await req.json();
    return {
      status: req.status,
      msg: data.msg,
      payload: data.payload
    }
  };
  