
export const getLocation = async () => {
    if (navigator.geolocation) {
        const pos = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject)
        })
        return { lat: pos.coords.latitude, lon: pos.coords.longitude }
    }

}