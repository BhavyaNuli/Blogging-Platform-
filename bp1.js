document.addEventListener("DOMContentLoaded", function() {
    const addPostForm = document.getElementById("addPostForm");
    const postList = document.querySelector(".post-list");

    addPostForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const title = addPostForm.title.value;
        const content = addPostForm.content.value;

        const post = document.createElement("div");
        post.classList.add("post");
        post.innerHTML = `
            <h3>${title}</h3>
            <p>${content}</p>
        `;

        // Open a new window/tab with the post content
        const newWindow = window.open("", "_blank");
        newWindow.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Published Post</title>
                <link rel="stylesheet" type="text/css" href="bp1.css">
            </head>
            <body>
                <section class="published-posts-list">
                    ${post.outerHTML}
                </section>
            </body>
            </html>
        `);

        addPostForm.reset();
    });
});