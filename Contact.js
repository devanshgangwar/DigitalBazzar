import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs{
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return <Wrapper>
    <h2 className="common-heading"> Contact Page</h2>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14283.943681709992!2d80.2549199850997!3d26.488398185737406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c37
    f2bf0633d1%3A0x9624971835a3adef!2z4KSG4KS14KS-4KS4IOCkteCkv-CkleCkvuCkuCwg4KSV4KSy4KWN4KSv4KS-4KSo4KSq4KWB4KSwLCDgpJXgpL7gpKjgpKrgpYHgpLAsIOCkieCkpOCljeCkpOCksCDgpKrgpY3gpLDgpKbgpYfgpLY
    !5e0!3m2!1shi!2sin!4v1716809651474!5m2!1shi!2sin"
      width="100%"
      height="400"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"></iframe>


    <div className="container">
      <div className="contact-form">
        <form action="https://formspree.io/f/xvoenllk" method="POST" className="contact-inputs">
          <input type="text" placeholder="username" name="username" autoComplete="OFF"  required />
          <input type="email" placeholder="email" name="email" autoComplete="OFF"  required />
          <textarea name="message" placeholder="Enter your message" cols="30" rows="10"
            required autoComplete="OFF"
          ></textarea>
          <input type="submit" value="send" />

        </form>

      </div>
    </div>

  </Wrapper>;
};

export default Contact;
