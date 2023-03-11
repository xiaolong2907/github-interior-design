var users = [
    {
        id: 1,
        name: 'Kien Dam',
    },
    {
        id: 2,
        name: 'Son Dang',
    },
    {
        id: 3,
        name: 'Thanh Long'
    }
]

var comments = [
    {
        id: 1,
        user_id: 1,
        content: 'Anh Son chua ra video :(',
    },
    {
        id: 2,
        user_id: 2,
        content: 'Vua ra xong em oi',
    }
]

function getComments() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(comments)
        }, 1000)
    })
};

getComments()
    .then(function(comments) {
        var userIds = comments.map(function(comment) {
            return comment.user_id
        });

        console.log(userIds)
    });