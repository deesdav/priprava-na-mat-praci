export const getAllMovies = async () => {
    const req = await fetch("http://localhost:3000/movies", {
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
  export const getMovieById = async (id) => {
    const req = await fetch(`http://localhost:3000/movies/${id}`, {
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
  
  export const createMovie = async (formData) => {
    const req = await fetch(`http://localhost:3000/movies`, {
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
  
  export const updateMovie = async (id, formData) => {
    const req = await fetch(`http://localhost:3000/movies/${id}`, {
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
  
  export const deleteMovie = async (id) => {
    const req = await fetch(`http://localhost:3000/movies/${id}`, {
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
  