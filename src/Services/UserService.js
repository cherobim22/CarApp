import api from "../Utils/Api";

export async function getHotels() {
    return await api.get('/api/hotel/');  
}

export async function createHotel(name, resume) {
    return await api.post(`/api/hotel/`, {
        name: `${name}`,
        hotelResume:  `${resume}`,
        rate:"1",
        amenities:"nothing",
        address:"nothing"
      });
}

export async function updateHotel(id, name, resume) {
    return await api.put(`/api/hotel/${id}`, {
        id:id,
        name: `${name}`,
        hotelResume:  `${resume}`,
        rate:"1",
        amenities:"nothing",
        address:"nothing"
      });
}

export async function deleteHotel(id ) {
    return await api.delete(`/api/hotel/${id}`);
}


export async function heavyLoad() {
    const request = new Promise((resolve, handleError) => {
        setInterval(() => {
            resolve(true);
        }, 3000)
    })
}