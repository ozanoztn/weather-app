import axios from 'axios';

export const getInfos = {
    data() {
        return {
            city: 'istanbul',
        }
    },
    methods: {
        async getInfos() {
            let data = [];
            await axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${this.city}?unitGroup=metric&key=XRQBFBAQ2U84E6LWGPA8B6B7T&contentType=json`)
                .then((response) => {
                    data = response.data
                }
                )
            return data;

        },
    }
}