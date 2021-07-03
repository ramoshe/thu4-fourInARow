class Token {
    constructor(index, owner) {
        this.owner = owner;
        this.id = `token-${index}-${owner.id}`;
        this.dropped = false;
    }

    /**
     * Gets associated htmlToken
     * @return  {element}   HTML element associated with the token object
     */
    get htmlToken() {
        return document.getElementById(this.id);
    }

    /**
     * Draws new HTML Token
     */
    drawHTMLToken() {
        const token = document.createElement('div');
        document.querySelector('#game-board-underlay').appendChild(token);
        token.setAttribute('id', this.id);
        token.setAttribute('class', 'token');
        token.style.backgroundColor = this.owner.color;
    }

    
}