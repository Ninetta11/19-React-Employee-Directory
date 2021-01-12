import $ from 'jquery';
const URL = 'https://randomuser.me/api/?results=';

export default {
    search: function (query) {
        return (
            $.ajax({
                url: URL + query,
                dataType: 'json',
                success: function (data) {
                    console.log(data);
                }
            }))
    }
}
