class PhotographerFactory{
    constructor(data) {
        Object.assign(this, data)
    }
å
    getUserCardDOM() {
        return `
            <article class='photographer'>
                <a href="./photographer.html?id=${this.id}">
                    <img class="PhotographerIndexPage" src="./assets/photographers/${this.portrait}"/>
                    <h2>${this.name}</h2>
                </a>
                <div class='détail'>
                    <h4>${this.city}, ${this.country}</h4>
                    <h5>${this.tagline}</h5>
                    <h6>${this.price}€/jour</h6>
                </div>
            </article>
        `
    }

    getHeaderPhotographer() {
        return `
        <div class="photographProfile_detail">
        <h1 class="titlePhotographe">${this.name}</h1>
        <h4>${this.city}, ${this.country}</h4>
        <h5>${this.tagline}</h5>
        </div>
        <button class="contact_button" onclick="displayModal()" id="contact_modal">Contactez-moi</button>
        <img src='./assets/photographers/${this.portrait}'/>
        <div id="contact__modal" class="modal" role="dialog" aria-modal="true">
        <div class="modal-content">
            <header class="modal-header">
                <h1 class="modal-header-title">Contactez-moi ${this.name}</h1>
                <span class="close"><i class="fa-solid fa-x"></i></span>
            </header>
            <form>
                <div>
                    <label for="firstname">Prénom</label>
                    <input type="text" name="firstname" tabindex="3" id="firstname" required>
                </div>
                <div>
                    <label for="lastname">Nom</label>
                    <input type="text" name="lastname" tabindex="3" id="lastname" required>
                </div>
                <div>
                    <label for="email">Email</label>
                    <input type="email" name="lastname" tabindex="3" id="email" required>
                </div>
                <div>
                    <label for="message">Votre message</label>
                    <input tabindex="3" id="message">
                </div>
            </form>
                <button type="submit" id="form-submit-button" tabindex="3">Envoyer</button>
        </div>
    </div>
        `
    }

    

}


