document.getElementById('toepassen').addEventListener('click', function() {
    const zoekterm = document.getElementById('zoekterm').value.toLowerCase();
    const sorteerOp = document.getElementById('sorteer').value;
    const limiet = parseInt(document.getElementById('limiet').value);
    
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
            // Filter posts op zoekterm
            const gefilterdePosts = posts.filter(post => 
                post.title.toLowerCase().includes(zoekterm)
            );

            // Sorteer posts op basis van keuze
            if (sorteerOp === 'titel-oplopend') {
                gefilterdePosts.sort((a, b) => a.title.localeCompare(b.title));
            } else if (sorteerOp === 'titel-aflopend') {
                gefilterdePosts.sort((a, b) => b.title.localeCompare(a.title));
            } else if (sorteerOp === 'id-oplopend') {
                gefilterdePosts.sort((a, b) => a.id - b.id);
            } else if (sorteerOp === 'id-aflopend') {
                gefilterdePosts.sort((a, b) => b.id - a.id);
            }

            // Beperk het aantal posts tot de geselecteerde limiet
            const postsTeTonen = gefilterdePosts.slice(0, limiet);

            // Weergeven van posts
            const postsContainer = document.getElementById('posts-container');
            postsContainer.innerHTML = ''; // Maak de container leeg

            if (postsTeTonen.length > 0) {
                postsTeTonen.forEach(post => {
                    const postElement = document.createElement('div');
                    postElement.classList.add('post');
                    
                    const titelElement = document.createElement('div');
                    titelElement.classList.add('post-titel');
                    titelElement.textContent = post.title.toUpperCase(); 
                    
                    const bodyElement = document.createElement('div');
                    bodyElement.classList.add('post-body');
                    bodyElement.textContent = post.body.length > 100 ? post.body.substring(0, 100) + '...' : post.body;
                    
                    const postInfoElement = document.createElement('div');
                    postInfoElement.classList.add('post-info');
                    postInfoElement.innerHTML = `Post ID: ${post.id} | Gebruiker ID: ${post.userId}`;
                    
                    postElement.appendChild(titelElement);
                    postElement.appendChild(bodyElement);
                    postElement.appendChild(postInfoElement);
                    
                    postsContainer.appendChild(postElement);
                });
            } else {
                // Geen posts gevonden
                postsContainer.innerHTML = '<div class="geen-resultaten">Geen posts gevonden</div>';
            }
        })
        .catch(error => {
            console.error('Error fetching posts:', error);
        });
});
