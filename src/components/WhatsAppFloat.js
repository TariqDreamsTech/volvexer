import { whatsappLink } from '../data/site';

function WhatsAppFloat() {
    return (
        <a
            className="whatsapp-float"
            href={whatsappLink('Hi Volvexer, I have a question.')}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
        >
            <i className="fab fa-whatsapp" aria-hidden="true"></i>
        </a>
    );
}

export default WhatsAppFloat;
