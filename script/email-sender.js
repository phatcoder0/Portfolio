import { personalData } from "../data/personal-data.js";

export function emailSender() {
    const publicKey = personalData.emailPublicKey;
    const serviceId = personalData.serviceId;
    const templateId = personalData.templateId;

    // Initialize EmailJS with Public Key
    emailjs.init(publicKey);
    document.querySelector("#contact-form").addEventListener("submit", (event) => {
        event.preventDefault();

        // Collect form data
        const formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value
        };

        console.log("Sending email with data:", formData);

        // Send email using EmailJS
        emailjs.send(serviceId, templateId, formData)
            .then((response) => {
                console.log("Email sent successfully:", response);
                alert("Message sent successfully!");
                document.getElementById("contact-form").reset();
            })
            .catch((error) => {
                console.error("Failed to send email:", error);
                alert("Failed to send message. Please try again.");
            });
    });
}
