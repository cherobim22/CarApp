import api from "../Utils/Api";

export async function getHotels() {
    return await api.get('/carros/');  
}

export async function createHotel(name, resume) {
    return await api.post(`/carros/`, {
        name: `${name}`,
        description:  `${resume}`,
      });
}

export async function updateHotel(id, name, resume) {
    return await api.put(`/carros/${id}`, {
        name: `${name}`,
        description:  `${resume}`,
      });
}

export async function deleteHotel(id ) {
    return await api.delete(`/carros/${id}`);
}


export async function heavyLoad() {
    const request = new Promise((resolve, handleError) => {
        setInterval(() => {
            resolve(true);
        }, 3000)
    })
}