class MediaFactory {
    constructor(data) {
        if (data.image) {
            return new Image(data)
        } else if (data.video) {
            return new Video(data)
        }
    }
}

class Image {
    constructor(data) {
        Object.assign(this, data)
    }
    
    createImageOrMovie() {
		return `
        <figure aria-label="${this.title}">
            <img src="../assets/SamplePhotos/${this.photographerId}/${this.image}" alt="${this.image}" />
                <figcaption>${this.title}</figcaption>
                <button class="likeButton">
                    <p>${this.likes}</p>
                    <i class="fa-solid fa-heart likeMedia dontSeeDislike"></i>
                    <i class="fa-regular fa-heart seeDislike"></i>
                </button>
        </figure>
        `;
    }

}

class Video {
    constructor(data) {
        Object.assign(this, data)
    }

    createImageOrMovie() {
        return `
        <figure>
            <video controls tabindex="5">
                <source src="../assets/SamplePhotos/${this.photographerId}/${this.video}"/>
            </video>
                <figcaption>${this.title}</figcaption>
                <button class="likeButton">
                    <p>${this.likes}</p>
                    <i class="fa-solid fa-heart likeMedia dontSeeDislike"></i>
                    <i class="fa-regular fa-heart seeDislike"></i>
                </button>
        </figure>
        `;
    }

}

