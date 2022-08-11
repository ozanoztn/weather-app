export const updateDatas = {
    methods: {
        updateTodaysDatas() {
            for (let d = 0; d < this.days.length; d++) {

                for (let h = 0; h < this.days[d].hours.length; h++) {

                    if (this.days[d].datetime == this.date[0] && this.days[d].hours[h].datetime == (this.date[1]) + ':00') {

                        if (this.component == 'row') {
                            this.data.temperature = this.days[d].hours[h].temp;
                            this.data.weather = this.days[d].hours[h].conditions;
                        }

                        else if (this.component == 'rowHolder') {
                            this.datas.rainFall = this.days[d].hours[h].snow
                            this.datas.wind = this.days[d].hours[h].windspeed
                            this.datas.humidity = this.days[d].hours[h].humidity

                        }

                    }
                }
            }
        }

    }
}