export const setDate = {
    methods: {
        setDate() {
            let selectedDate;
            let selectedTime;
            let newDate = new Date();
            let day = newDate.getDate().toString();
            let month = parseInt(newDate.getUTCMonth() + 1).toString();
            let year = newDate.getUTCFullYear().toString();

            if (day.length < 2)
                day = '0' + day

            if (month.length < 2)
                month = '0' + month

            selectedDate = year + '-' + month + '-' + day
            selectedTime = JSON.stringify(newDate.getHours());

            if (selectedTime.length < 2)
                selectedTime = '0' + selectedTime + ':00'
            else
                selectedTime = selectedTime + ':00'

            return [selectedDate, selectedTime];
        },
    }
}