(() => {
    console.log('Connected!')

    const form = document.querySelector('#contact-form'), submit = form.querySelector('.submit');
    const viewButtons = document.querySelectorAll('.call-to-action');
    const modal = document.querySelector('#project-modal');
    const close = document.querySelector('.close');

    function showModal(projectData, el) {
        modal.querySelector(".title").textContent = `${projectData.title}`;
        modal.querySelector(".team").textContent = `TEAM: ${projectData.team}`;
        modal.querySelector(".discipline").textContent = `DISCIPLINE: ${projectData.discipline}`;
        modal.querySelector(".stack").textContent = `STACK: ${projectData.stack}`;
        modal.querySelector(".libraries").textContent = `LIBRARIES: ${projectData.libraries}`;
        modal.querySelector(".software").textContent = `SOFTWARE: ${projectData.software}`;
        modal.querySelector(".task").textContent = `${projectData.task}`;

        modal.classList.remove('hide');
  }

    function fetchData() {
        let targetEl = this,
        url = `/project/${this.dataset.target}`;

        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);

            showModal(data, targetEl);
        })
        .catch((err) => console.log(err));
    }

    function closeModal() {
        modal.classList.add('hide');
    }

    function handleMail(event) {
        event.preventDefault();

        // formdata will be the values of the fields the user fills out (the inputs)
        // maildata is an object we'll build and send through with those values

        let formdata = new FormData(form),
            maildata = {};

        // parse the form data (it's an iterable, so you have to do it this way)
        // and populate the maildata object with the input values (the formdata entries)
        for (let [key, value] of formdata.entries()) {
            maildata[key] = value;
        }

        let url = `/mail`;
        let msgArea = document.querySelector('.success');
        let errorMsg = document.querySelector('.error');

        // use the POST superglobal which is more secure than GET, and hit the /mail route in index.js
        // inside the routes folder. this will take in the formdata we're sending, and use that to send our email
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-type': 'application/json'
            },

            body: JSON.stringify(maildata)
        })
            .then(res => res.json())
            .then(data => {
                // remove this when testing is done and everything is working
                console.log(data);

                if (data.response.includes("OK")) {
                    // we successfully sent an email via gmail and nodemailer!
                    // flash success here, reset the form
                    form.reset();
                    msgArea.textContent = `Success! Thanks for reaching out.`;
                }
            }) // this will be a success or fail message from the server
            .catch((err) => console.log(err));

            errorMsg.textContent = `Error! Sorry, we could not send your message.`;
    }

    form.addEventListener('submit', handleMail)
    viewButtons.forEach(button => button.addEventListener('click', fetchData));
    close.addEventListener('click', closeModal);
})();