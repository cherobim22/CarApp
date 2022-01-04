import api from "../Utils/Api";

export async function getCars() {
    return await api.get('/carros/');  
}

export async function createCar(name, resume) {
    return await api.post(`/carros/`, {
        name: `${name}`,
        description:  `${resume}`,
      });
}

export async function updateCar(id, name, resume) {
    return await api.put(`/carros/${id}`, {
        name: `${name}`,
        description:  `${resume}`,
      });
}

export async function deleteCar(id) {
    return await api.delete(`/carros/${id}`);
}


export async function heavyLoad() {
    const request = new Promise((resolve, handleError) => {
        setInterval(() => {
            resolve(true);
        }, 3000)
    })
}