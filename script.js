
const grid = document.querySelector('.grid')
const cardTemplate = document.getElementById('card-template')
for (let i = 0; i < 10; i++) {
    grid.append(cardTemplate.content.cloneNode(true))
}

fetch("https://trello.com/b/ixi09S9c/blogs.json")
    .then(res => res.json())
    .then(posts => {
        console.log(posts)
        grid.innerHTML = ''
        posts = posts.cards
        posts.forEach(post => {
            const div = cardTemplate.content.cloneNode(true);

            div.querySelector('[data-title]').textContent = post.name;
            div.querySelector('[data-body]').textContent = post.desc;
            div.querySelector('[data-img]').src = post.attachments[0].url;
            grid.append(div);
        })
    })
