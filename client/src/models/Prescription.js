export const getAllPrescriptions = async () => {
    const req = await fetch("http://localhost:3000/prescriptions", {
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
  export const getPrescriptionById = async (id) => {
    const req = await fetch(`http://localhost:3000/prescriptions/${id}`, {
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
  
  export const createPrescription = async (formData) => {
    const req = await fetch(`http://localhost:3000/prescriptions`, {
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
  
  export const updatePrescription = async (id, formData) => {
    const req = await fetch(`http://localhost:3000/prescriptions/${id}`, {
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
  
  export const deletePrescription = async (id) => {
    const req = await fetch(`http://localhost:3000/prescriptions/${id}`, {
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
  