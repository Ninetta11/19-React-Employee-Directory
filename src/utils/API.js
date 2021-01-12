import $ from 'jquery';
const URL = 'https://randomuser.me/api/?results=';

function search(query) {
    return (
        $.ajax({
            url: URL + query,
            dataType: 'json',
            success: function (data) {
                console.log(data);
            }
        }))
}

export default search;

