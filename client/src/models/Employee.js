export const getAllEmployees = async () => {
    const req = await fetch("http://localhost:3000/employees", {
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
  export const getEmployeeById = async (id) => {
    const req = await fetch(`http://localhost:3000/employees/${id}`, {
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
  
  export const createEmployee = async (formData) => {
    const req = await fetch(`http://localhost:3000/employees`, {
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
  
  export const updateEmployee = async (id, formData) => {
    const req = await fetch(`http://localhost:3000/employees/${id}`, {
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
  
  export const deleteEmployee = async (id) => {
    const req = await fetch(`http://localhost:3000/employees/${id}`, {
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
  