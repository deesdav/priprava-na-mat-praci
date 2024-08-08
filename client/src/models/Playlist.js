export const getAllPlaylists = async () => {
    const req = await fetch("http://localhost:3000/playlists", {
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
  export const getPlaylistById = async (id) => {
    const req = await fetch(`http://localhost:3000/playlists/${id}`, {
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
  
  export const createPlaylist = async (formData) => {
    const req = await fetch(`http://localhost:3000/playlists`, {
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
  
  export const updatePlaylist = async (id, formData) => {
    const req = await fetch(`http://localhost:3000/playlists/${id}`, {
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
  
  export const deletePlaylist = async (id) => {
    const req = await fetch(`http://localhost:3000/playlists/${id}`, {
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
  