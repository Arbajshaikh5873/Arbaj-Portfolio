// Contact Component
function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="text-center">
          <p
            style={{
              color: "#b8b8b8",
              maxWidth: "600px",
              margin: "0 auto 30px",
            }}
          >
            I'm currently looking for new opportunities. Whether you have a
            question or just want to say hi, I'll get back to you as soon as
            possible!
          </p>
          <div>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=arbajshaikh5873@gmail.com&su=Hello&body=I%20want%20to%20connect"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <i className="bi bi-envelope-fill"></i>
              arbajshaikh5873@gmail.com
            </a>

            <a href="tel:+917387779339" className="contact-link">
              <i className="bi bi-telephone-fill"></i>
              +91-7387779339
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
